function parseSpaceSeparatedLineToNumberArray(line:string): number[] {
    return line.split(" ").map((char) => {return parseInt(char, 10)})
}

// 1行に1数字しかない場合にのみ使う
function parseFirstNumber(line: string): number {
    return parseInt(line, 10);
}

function solveSyoujin32(inputs:string[]) {
    class Queue<T> {
        private items: T[] = [];
	    private front: number = 0; // 最も早く追加された要素の位置を示す
	    private rear: number = 0; // 次に要素が入る位置を示す

        push(item: T) {
            this.items[this.rear] = item
            this.rear += 1
        }

        pop(): T | undefined {
            if (this.getLength() === 0) {
                return undefined
            }
            const currentFrontItem = this.items[this.front]
            this.front += 1
            return currentFrontItem
        }

        getLength() {
            return this.rear - this.front
        }
    }
    
    function convertPosToKey([h, w]:[number, number]): string {
        return `${h}-${w}`
    }

    function convertKeyToPos(key:string): [number, number] {
        return key.split("-").map(val => parseInt(val, 10)) as [number, number]
    }

    let lineNumberOfQuestionInputStart = 0
    let resList: number[] = []
    while (inputs[lineNumberOfQuestionInputStart] !== "0 0") {
        // 入力の処理
        const [W, H] = parseSpaceSeparatedLineToNumberArray(inputs[lineNumberOfQuestionInputStart])
        const mazeMap: string[][] = []
        for (let lineNumber = lineNumberOfQuestionInputStart + 1; lineNumber < lineNumberOfQuestionInputStart + 1 + 2*H - 1; lineNumber++) {
            mazeMap.push(inputs[lineNumber].split(""))
        }
        lineNumberOfQuestionInputStart += 2 * H
        
        // mazeからグラフを構成
        const graph = new Map<string, string[]>()
        const dh: [number, number, number, number] = [ 0, 0, 1,-1]
        const dw: [number, number, number, number] = [ 1,-1, 0, 0]
        for (let squareh = 0; squareh < H; squareh++) {
            for (let squarew = 0; squarew < W; squarew++) {
                const hInMazeMap = squareh * 2
                const wInMazeMap = squarew * 2

                graph.set(convertPosToKey([squareh, squarew]), [])

                for (let dInDhAndDw = 0; dInDhAndDw < 4; dInDhAndDw++) {
                    const nextSquareh = (squareh + dh[dInDhAndDw])
                    const nextSquarew = (squarew + dw[dInDhAndDw])
                    if (nextSquareh < 0 || H - 1 < nextSquareh || 
                        nextSquarew < 0 || W - 1 < nextSquarew
                    ) {
                        continue
                    }

                    const wallh = hInMazeMap + dh[dInDhAndDw]
                    const wallw = wInMazeMap + dw[dInDhAndDw]
                    if (wallh < 0 || 2*H - 1 < wallh || 
                        wallw < 0 || 2*W - 1 < wallw
                    ) {
                        continue
                    }

                    if (mazeMap[wallh][wallw] === "0") {
                        graph.get(convertPosToKey([squareh, squarew]))?.push(
                            convertPosToKey([nextSquareh, nextSquarew])
                        )
                    }
                }
            }
        }

        // graphに対してBFS
        const queue = new Queue<string>()
        const addedToQueuePosSet = new Set<string>()
        const posToLeastDistanceFromStartPos = new Map<string, number>()

        const startPos: [number, number] = [0, 0]
        posToLeastDistanceFromStartPos.set(convertPosToKey(startPos), 1)
        addedToQueuePosSet.add(convertPosToKey(startPos))
        queue.push(convertPosToKey(startPos))
        while (queue.getLength() !== 0) {
            const currentPosKey = queue.pop() as string
            const currentPosLeastDistanceFromStartPos = posToLeastDistanceFromStartPos.get(currentPosKey) as number
            
            const nextPosKeysList = graph.get(currentPosKey) as string[]
            for (const nextPosKey of nextPosKeysList) {
                if (addedToQueuePosSet.has(nextPosKey)) {
                    continue
                }
                
                posToLeastDistanceFromStartPos.set(nextPosKey, currentPosLeastDistanceFromStartPos + 1)
                addedToQueuePosSet.add(nextPosKey)
                queue.push(nextPosKey)
            }

        }

        const goalPosLeastDistanceFrom00 = posToLeastDistanceFromStartPos.get(convertPosToKey([H-1, W-1]))
        resList.push(
            goalPosLeastDistanceFrom00 ?? 0
        )

    }

    for (const res of resList) {
        console.log(res)
    }
}

const inputSyoujin32 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin32(inputSyoujin32)