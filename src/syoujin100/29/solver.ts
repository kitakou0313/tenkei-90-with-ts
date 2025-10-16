function parseSpaceSeparatedLineToNumberArray(line:string): number[] {
    return line.split(" ").map((char) => {return parseInt(char, 10)})
}

// 1行に1数字しかない場合にのみ使う
function parseFirstNumber(line: string): number {
    return parseInt(line, 10);
}

function solveSyoujin29(inputs:string[]) {
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
    const [R, C] = parseSpaceSeparatedLineToNumberArray(inputs[0])
    const [startR, startC] = parseSpaceSeparatedLineToNumberArray(inputs[1]).map((value) => value-1)
    const [goalR, goalC] = parseSpaceSeparatedLineToNumberArray(inputs[2]).map((value) => value-1)
    const maze: string[][] = []
    for (let lineNumber = 3; lineNumber < inputs.length; lineNumber++) {
        const row = inputs[lineNumber].split('')
        maze.push(row)
    }

    function convertPosToKey(r:number, c:number): string {
        return `${r}-${c}`
    }
    function convertKeyToPos(key: string): [number, number] {
        const [r, c] = key.split("-").map((char) => {return parseInt(char, 10)})
        return [r, c]
    }

    const posToLeastDistanceMap = new Map<string, number>()
    const queue = new Queue<string>()
    const visitedPosSet = new Set<string>()
    const dr = [0,0,1,-1]
    const dc = [1,-1,0,0]


    posToLeastDistanceMap.set(convertPosToKey(startR, startC), 0)
    queue.push(convertPosToKey(startR, startC))
    visitedPosSet.add(convertPosToKey(startR, startC))
    while (queue.getLength() !== 0) {
        const currentPosKey = queue.pop()
        if (typeof currentPosKey === "undefined") {
            throw Error("currentPosKey is undefined")
        }
        const [currentR, currentC] = convertKeyToPos(currentPosKey)
        const leastDistanceOfCurrentPos = posToLeastDistanceMap.get(currentPosKey)
        if (typeof leastDistanceOfCurrentPos === "undefined") {
            throw Error("leastDistanceOfCurrentPos is undefined")
        }

        for (let dIndex = 0; dIndex < 4; dIndex++) {
            const [nextR, nextC] = [currentR + dr[dIndex], currentC + dc[dIndex]]
            if (nextR < 0 || R-1 < nextR || nextC < 0 || C-1 < nextC ||
                maze[nextR][nextC] !== ".") {
                continue
            }

            posToLeastDistanceMap.set(convertPosToKey(nextR, nextC), leastDistanceOfCurrentPos + 1)
            queue.push(convertPosToKey(nextR, nextC))
            visitedPosSet.add(convertPosToKey(nextR, nextC))

        }
    }

}

const inputSyoujin29 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin29(inputSyoujin29)