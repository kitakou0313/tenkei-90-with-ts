function parseSpaceSeparatedLineToNumberArray(line:string): number[] {
    return line.split(" ").map((char) => {return parseInt(char, 10)})
}

// 1行に1数字しかない場合にのみ使う
function parseFirstNumber(line: string): number {
    return parseInt(line, 10);
}

function solveSyoujin42(inputs:string[]) {
    const [N, M] = parseSpaceSeparatedLineToNumberArray(inputs[0])

    const distanceList: number[] = []
    for (let lineNumber = 1; lineNumber < 1+N; lineNumber++) {
        const Di = parseFirstNumber(inputs[lineNumber])
        distanceList.push(Di)
    }

    const conditions: number[] = []
    for (let lineNumber = 1+N; lineNumber < 1+N+M; lineNumber++) {
        const Ci = parseFirstNumber(inputs[lineNumber])
        conditions.push(Ci)
    }
}

const inputSyoujin42 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin42(inputSyoujin42)