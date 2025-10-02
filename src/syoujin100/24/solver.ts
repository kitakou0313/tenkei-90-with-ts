function parseSpaceSeparatedLineToNumberArray(line:string): number[] {
    return line.split(" ").map((char) => {return parseInt(char, 10)})
}

// 1行に1数字しかない場合にのみ使う
function parseFirstNumber(line: string): number {
    return parseInt(line, 10);
}

function solveSyoujin24(inputs:string[]) {
    const N = parseFirstNumber(inputs[0])
    const graph: number[][] = []
    for (let line = 1; line < inputs.length; line++) {
        const parsedLine = parseSpaceSeparatedLineToNumberArray(inputs[line])
        graph.push(parsedLine.splice(2))
    }

    // DFSする

    const visitedNodesSet = new Set()
    const nodesSearchTimes: Map<number, [number, number]> = new Map()
    let searchStepCount = 0
    function dfs(startNode:number) {
        console.log(graph, startNode, nodesSearchTimes, visitedNodesSet)
        visitedNodesSet.add(startNode)
        searchStepCount += 1
        nodesSearchTimes.set(startNode, [searchStepCount, -1])
        
        const connectedNodesList = graph[startNode-1]
        for (const nextNode of connectedNodesList) {
            if (visitedNodesSet.has(nextNode)) {
                continue
            }
            dfs(nextNode)
        }
        searchStepCount += 1;
        (nodesSearchTimes.get(startNode) as number[])[1] = searchStepCount
    }

    // 1から未到達のNodeに対して追加実行する処理を入れる
    dfs(1)
    
    // 出力をnodeNumberで昇順にする
    for (let nodeNumber = 1; nodeNumber <= N; nodeNumber++) {
        console.log(nodeNumber)
        const nodeSearchTime = nodesSearchTimes.get(nodeNumber)
        if (typeof nodeSearchTime === "undefined") {
            continue
        }
        console.log('%d %d %d', nodeNumber, nodeSearchTime[0], nodeSearchTime[1])
    }

}

const inputSyoujin24 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin24(inputSyoujin24)