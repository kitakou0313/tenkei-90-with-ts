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
        
        graph[start].push(end)
    }

    function calcDistanceListFromStartNode(startNode:number, N: number): number[] {
        const distancesList: number[] = Array.from(
            {length: N}, (_, index) => {return 0}
        )
        for (let index = 0; index < N; index++) {
            
            
        }

        return distancesList
    }

    const distanceListFrom0 = calcDistanceListFromStartNode(0)
    const nodeMostSeparatedFrom0 = distanceListFrom0.indexOf(Math.max(...distanceListFrom0))
    const distanceListFromNodeMostSeparatedFrom0 = calcDistanceListFromStartNode(
        nodeMostSeparatedFrom0
    )
    return Math.max(...distanceListFromNodeMostSeparatedFrom0) + 1


}

const input3 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solve3(input3)