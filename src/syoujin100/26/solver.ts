function parseSpaceSeparatedLineToNumberArray(line:string): number[] {
    return line.split(" ").map((char) => {return parseInt(char, 10)})
}

// 1行に1数字しかない場合にのみ使う
function parseFirstNumber(line: string): number {
    return parseInt(line, 10);
}

function solveSyoujin26(inputs:string[]) {
    const [N, Q] = parseSpaceSeparatedLineToNumberArray(inputs[0])
    const edges: [number, number][] = []
    for (let lineNumber = 1; lineNumber < 1 + N - 1; lineNumber++) {
        const [a, b] = parseSpaceSeparatedLineToNumberArray(inputs[lineNumber])
        edges.push([a, b])
    }
    const operations: [number, number][] = []
    for (let lineNumber = 1 + N - 1; lineNumber < inputs.length; lineNumber++) {
        const [rootNodeOfTargetSubTree, incrementalValue] = parseSpaceSeparatedLineToNumberArray(
            inputs[lineNumber]
        )
        operations.push([rootNodeOfTargetSubTree, incrementalValue])
    }
}

const inputSyoujin26 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin26(inputSyoujin26)