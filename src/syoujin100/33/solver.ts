function parseSpaceSeparatedLineToNumberArray(line:string): number[] {
    return line.split(" ").map((char) => {return parseInt(char, 10)})
}

// 1行に1数字しかない場合にのみ使う
function parseFirstNumber(line: string): number {
    return parseInt(line, 10);
}

function solveSyoujin33(inputs:string[]) {
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

    const [H, W] = parseSpaceSeparatedLineToNumberArray(inputs[0])
    const grids: string[][] = []
    for (let lineNumber = 1; lineNumber < inputs.length; lineNumber++) {
        grids.push(inputs[lineNumber].split(""))
    }

    // BFSで経路を求める
    const queue = new Queue<string>()
    const addedToQueuePosSet = new Set<string>()
    const posToLeastPathMap = new Map<string, string[]>()

    const startPos: [number, number] = [0, 0]
    posToLeastPathMap.set(convertPosToKey(startPos), [convertPosToKey(startPos)])
    queue.push(convertPosToKey(startPos))
    addedToQueuePosSet.add(convertPosToKey(startPos))

    const dh = [0, 0, 1, -1]
    const dw = [1, -1, 0, 0]
    while (queue.getLength() !== 0) {
        const currentPosKey = queue.pop()
        if (typeof currentPosKey === "undefined") {
            break
        }
        const [currentH, currentW] = convertKeyToPos(currentPosKey)
        const pathToCurrentPos = posToLeastPathMap.get(currentPosKey)
        if (typeof pathToCurrentPos === "undefined") {
            break
        }
        for (let indexInDhAndDw = 0; indexInDhAndDw < 4; indexInDhAndDw++) {
            const [nextH, nextW] = [currentH + dh[indexInDhAndDw], currentW + dw[indexInDhAndDw]]
            if (nextH < 0 || H - 1 < nextH || 
                nextW < 0 || W - 1 < nextW || 
                grids[nextH][nextW] === "#" || 
                addedToQueuePosSet.has(convertPosToKey([nextH, nextW]))
            ) {
                continue
            }
            const pathToNextPos = [...pathToCurrentPos, convertPosToKey([nextH, nextW])]
            posToLeastPathMap.set(
                convertPosToKey([nextH, nextW]),
                pathToNextPos
            )
            queue.push(convertPosToKey([nextH, nextW]))
            addedToQueuePosSet.add(convertPosToKey([nextH, nextW]))
        }
    }
    
    // 得点計算
    const whiteGridsListOnPathToGoal = posToLeastPathMap.get(convertPosToKey([H-1, W-1]))
    if (typeof  whiteGridsListOnPathToGoal === "undefined") {
        console.log(-1)
        return
    }
    const whiteGridsSetOnPathToGoal = new Set(whiteGridsListOnPathToGoal)
    const whiteGridsNotOnLeastPathToGoalSet = new Set<string>()
    for (let h = 0; h < H; h++) {
        for (let w = 0; w < W; w++) {
            if (grids[h][w] === "#" ||
                whiteGridsSetOnPathToGoal.has(convertPosToKey([h, w]))
            ) {
                continue
            }
            whiteGridsNotOnLeastPathToGoalSet.add(convertPosToKey([h, w]))
        }
    }
    
    console.log(whiteGridsNotOnLeastPathToGoalSet.size)

}

const inputSyoujin33 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin33(inputSyoujin33)