function parseSpaceSeparatedLineToNumberArray(line:string): number[] {
    return line.split(" ").map((char) => {return parseInt(char, 10)})
}

// 1行に1数字しかない場合にのみ使う
function parseFirstNumber(line: string): number {
    return parseInt(line, 10);
}

function solveSyoujin24(inputs:string[]) {
    const N = parseFirstNumber(inputs[0])
    const graph: Map<number, number[]> = new Map()
    for (let line = 1; line < inputs.length; line++) {
        const parsedLine = parseSpaceSeparatedLineToNumberArray(inputs[line])
        graph.set(parsedLine[0], parsedLine.splice(2))
    }

    // DFSする

    const visitedNodesSet = new Set()
    const nodesSearchTimes: Map<number, [number, number]> = new Map()
    let searchStepCount = 0
    function dfs(startNode:number) {
        visitedNodesSet.add(startNode)
        searchStepCount += 1
        nodesSearchTimes.set(startNode, [searchStepCount, -1])
        
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
        (nodesSearchTimes.get(startNode) as number[])[1] = searchStepCount
    }
    dfs(1)
    
    // 出力をnodeNumberで昇順にする
    for (const [nodeNumber, nodeSearchTime] of nodesSearchTimes) {
        console.log('%d %d %d', nodeNumber, nodeSearchTime[0], nodeSearchTime[1])
    }

}

const inputSyoujin24 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin24(inputSyoujin24)