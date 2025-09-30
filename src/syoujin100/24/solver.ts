function parseSpaceSeparatedLineToNumberArray(line:string): number[] {
    return line.split(" ").map((char) => {return parseInt(char, 10)})
}

// 1行に1数字しかない場合にのみ使う
function parseFirstNumber(line: string): number {
    return parseInt(line, 10);
}

function solveSyoujin24(inputs:string[]) {
    class Stack<T>{
        private items: T[] = []
        
        constructor(items: T[]) {
            this.items = items
        }

        /**
         * pop
         */
        public pop() {
            return this.items.pop()
        }

        /**
         * push
         */
        public push(item: T) {
            this.items.push(item)
        }

        /**
         * top
         */
        public top() {
            return this.items[-1]
        }

        /**
         * isEmpty
         */
        public isEmpty() {
            return this.items.length == 0
        }
    }
    
    const N = parseFirstNumber(inputs[0])
    const graph: Map<number, number[]> = new Map()
    for (let line = 1; line < inputs.length; line++) {
        const parsedLine = parseSpaceSeparatedLineToNumberArray(inputs[line])
        graph.set(parsedLine[0], parsedLine.splice(2))
    }

    // DFSする

    const visitedNodesSet = new Set()
    const nodesSearchTime: Map<number, [number, number]> = new Map()
    let searchStepCount = 1
    function dfs(startNode:number) {
        visitedNodesSet.add(startNode)
        nodesSearchTime.set(startNode, [searchStepCount, -1])
        searchStepCount += 1
        
        const connectedNodesList = graph.get(startNode)
        if (connectedNodesList === undefined){
            return
        }
        for (const nextNode of connectedNodesList) {
            if (visitedNodesSet.has(nextNode)) {
                continue
            }
            dfs(nextNode)
        }
        searchStepCount += 1;
        (nodesSearchTime.get(startNode) as number[])[1] = searchStepCount
    }
    
    console.log(nodesSearchTime)
}

const inputSyoujin24 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin24(inputSyoujin24)