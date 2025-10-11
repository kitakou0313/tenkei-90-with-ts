function parseSpaceSeparatedLineToNumberArray(line:string): number[] {
    return line.split(" ").map((char) => {return parseInt(char, 10)})
}

// 1行に1数字しかない場合にのみ使う
function parseFirstNumber(line: string): number {
    return parseInt(line, 10);
}

function solveSyoujin26(inputs:string[]) {
    const [N, Q] = parseSpaceSeparatedLineToNumberArray(inputs[0])
    const tree: number[][] = Array.from({length: N}, () => [])
    for (let lineNumber = 1; lineNumber < 1 + N - 1; lineNumber++) {
        const [a, b] = parseSpaceSeparatedLineToNumberArray(inputs[lineNumber])
        tree[a-1].push(b-1)
        tree[b-1].push(a-1)
    }
    const accumuratedSumArray: number[] = Array.from({length: N}, () => 0)
    for (let lineNumber = 1 + N - 1; lineNumber < inputs.length; lineNumber++) {
        const [rootNodeOfTargetSubTree, incrementalValue] = parseSpaceSeparatedLineToNumberArray(
            inputs[lineNumber]
        )
        accumuratedSumArray[rootNodeOfTargetSubTree-1] += incrementalValue
    }

    // 各ノードごとにそれを根とした時の部分木に属するノードをリストにする
    function dfs(rootNode: number, parentNode: number, tree: number[][], accumuratedSumArray: number[]) {
        if (parentNode != -1) {
            accumuratedSumArray[rootNode] += accumuratedSumArray[parentNode]
        }
        for (const connectedNode of tree[rootNode]) {
            if (connectedNode === parentNode) {
                continue
            }
            dfs(connectedNode, rootNode, tree, accumuratedSumArray)
        }
    }

    dfs(0, -1, tree, accumuratedSumArray)

    console.log(
        accumuratedSumArray.join(" ")
    )
}

const inputSyoujin26 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin26(inputSyoujin26)