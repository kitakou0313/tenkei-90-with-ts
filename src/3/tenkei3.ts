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

function solve3(input3: string[]) {
    const N = parseInt(input3[0], 10)
    const graph: number[][] = []
    for (let index = 0; index < N; index++) {
        graph.push([])        
    }
    for (const line of input3.slice(1)) {
        const [start, end] = line.split(' ').map(
            (char) => {return parseInt(char, 10)}
        )
        
        graph[start-1].push(end-1)
        graph[end-1].push(start-1)
    }

    function calcDistanceListFromStartNode(startNode:number, N: number, graph: number[][]): number[] {
        const distancesList: number[] = Array.from(
            {length: N}, (_, index) => {return -1}
        )
        const visitedNodeList = new Set<number>()
        const stack = new Stack<number>([])

        stack.push(startNode)
        visitedNodeList.add(startNode)
        distancesList[startNode] = 0

        // type guardを入れる
        while (!(stack.isEmpty())) {
            const currentNode = stack.pop() as number

            for (const nextNode of graph[currentNode]) {
                if (visitedNodeList.has(nextNode)) {
                    continue
                }
                stack.push(nextNode)
                visitedNodeList.add(nextNode)
                distancesList[nextNode] = distancesList[currentNode] + 1
            }
        }
        return distancesList
    }

    const distanceListFrom0 = calcDistanceListFromStartNode(0, N, graph)
    const nodeMostSeparatedFrom0 = distanceListFrom0.indexOf(Math.max(...distanceListFrom0))
    const distanceListFromNodeMostSeparatedFrom0 = calcDistanceListFromStartNode(
        nodeMostSeparatedFrom0, N, graph
    )
    console.log(Math.max(...distanceListFromNodeMostSeparatedFrom0) + 1)


}

const input3 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solve3(input3)