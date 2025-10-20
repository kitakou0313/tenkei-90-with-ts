function parseSpaceSeparatedLineToNumberArray(line:string): number[] {
    return line.split(" ").map((char) => {return parseInt(char, 10)})
}

// 1行に1数字しかない場合にのみ使う
function parseFirstNumber(line: string): number {
    return parseInt(line, 10);
}

function solveSyoujin30(inputs:string[]) {
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
    const [H, W, N] = parseSpaceSeparatedLineToNumberArray(inputs[0])
    const cityMap : string[][] = []
    for (let lineNumber = 1; lineNumber < inputs.length; lineNumber++) {
        cityMap.push(
            inputs[lineNumber].split("")
        ) 
    }
    for (let h = 0; h < H; h++) {
        for (let w = 0; w < W; w++) {
            const valInGridhw = cityMap[h][w]
            if (valInGridhw === "S") {
                cityMap[h][w] = "0"
            }
        }
    }

    function convertPosToStr(h:number, w:number): string {
        return `${h}-${w}`
    }
    function convertStrToPos(key: string): [number, number] {
        const [h, w] = key.split("-").map((char) => {return parseInt(char, 10)})
        return [h, w]
    }

    const cheeseNumberToFactoryPos = new Map<number, [number, number]>()
    for (let h = 0; h < H; h++) {
        for (let w = 0; w < W; w++) {
            const valInGridhw = cityMap[h][w]
            if (valInGridhw in ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]) {
                const cheeseNumber = parseInt(valInGridhw, 10)
                cheeseNumberToFactoryPos.set(
                    cheeseNumber, [h, w]
                ) 
            }
        }
    }
    let sumOfLeastDistances = 0

    for (let cheeseNumberInGoal = 1; cheeseNumberInGoal < N+1; cheeseNumberInGoal++) {
        const cheeseNumberInStart = cheeseNumberInGoal - 1
        const posOfCheeseNumberInStart = cheeseNumberToFactoryPos.get(cheeseNumberInStart) as [number, number]
        const posOfCheeseNumberInGoal = cheeseNumberToFactoryPos.get(cheeseNumberInGoal) as [number, number]
        const queue = new Queue<string>()
        const setOfPosAddedToQueue = new Set<string>()
        const posToLeastDistanceMap = new Map<string, number>()
        const dh = [0,0,1,-1]
        const dw = [1,-1,0,0]

        queue.push(convertPosToStr(...posOfCheeseNumberInStart))
        setOfPosAddedToQueue.add(convertPosToStr(...posOfCheeseNumberInStart))
        posToLeastDistanceMap.set(convertPosToStr(...posOfCheeseNumberInStart), 0)

        while (queue.getLength() !== 0) {
            const currentPosStr = queue.pop() as string
            const [currentPosh, currentPosw] = convertStrToPos(currentPosStr)

            const leastDistanceOfCurrentPos = posToLeastDistanceMap.get(convertPosToStr(currentPosh, currentPosw)) as number
        
            for (let indexInDhAndDw = 0; indexInDhAndDw < 4; indexInDhAndDw++) {
                const nexth = currentPosh + dh[indexInDhAndDw]
                const nextw = currentPosw + dw[indexInDhAndDw]

                if (nexth < 0 || H-1 < nexth ||
                    nextw < 0 || W-1 < nextw ||
                    setOfPosAddedToQueue.has(convertPosToStr(nexth, nextw)) || 
                    cityMap[nexth][nextw] === "X"
                ) {
                    continue
                }

                queue.push(convertPosToStr(nexth, nextw))
                setOfPosAddedToQueue.add(convertPosToStr(nexth, nextw))
                posToLeastDistanceMap.set(convertPosToStr(nexth, nextw), leastDistanceOfCurrentPos + 1)
            }
        }

        sumOfLeastDistances += posToLeastDistanceMap.get(convertPosToStr(...posOfCheeseNumberInGoal)) as number

    }

    console.log(sumOfLeastDistances)

}

const inputSyoujin30 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin30(inputSyoujin30)