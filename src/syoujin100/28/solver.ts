function parseSpaceSeparatedLineToNumberArray(line:string): number[] {
    return line.split(" ").map((char) => {return parseInt(char, 10)})
}

// 1行に1数字しかない場合にのみ使う
function parseFirstNumber(line: string): number {
    return parseInt(line, 10);
}

function solveSyoujin28(inputs:string[]) {
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
    
    const N = parseFirstNumber(inputs[0])
    const graph: number[][] = Array.from({length: N}, () => [])
    for (let lineNumber = 1; lineNumber < inputs.length; lineNumber++) {
        const parsedLine = parseSpaceSeparatedLineToNumberArray(inputs[lineNumber])
        const nodeNumber = parsedLine[0] - 1
        const connectedNodes = parsedLine.slice(2)
        graph[nodeNumber].push(...(connectedNodes.map((value) => value - 1)))
    }

    const nodeAndLeastDistanceMap = new Map<number, number>([[0, 0]])
    const queue = new Queue<number>()
    const nodesAddedToQueueSet = new Set<number>()

    // はばたん
    queue.push(0)
    nodesAddedToQueueSet.add(0)

    while (queue.getLength() !== 0) {
        const currentNode = queue.pop()
        if (typeof currentNode === "undefined") {
            throw new Error("Current node is undefined")
        }

        for (const nextNode of graph[currentNode]) {
            if (nodesAddedToQueueSet.has(nextNode)) {
                continue
            }
            const leastDistanceOfCurrentNode = nodeAndLeastDistanceMap.get(currentNode)
            if (typeof leastDistanceOfCurrentNode === "undefined") {
                throw new Error("leastDistanceOfCurrentNode is undefined")
            }
            nodeAndLeastDistanceMap.set(nextNode, leastDistanceOfCurrentNode + 1)
            queue.push(nextNode)
            nodesAddedToQueueSet.add(nextNode)
        }
    }

    for (let nodeNumberIndex = 0; nodeNumberIndex < N; nodeNumberIndex++) {
        console.log('%d %d', nodeNumberIndex + 1, nodeAndLeastDistanceMap.get(nodeNumberIndex))
        
    }
    
}

const inputSyoujin28 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin28(inputSyoujin28)