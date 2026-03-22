function parseSpaceSeparatedLineToNumberArray(line:string): number[] {
    return line.split(" ").map((char) => {return parseInt(char, 10)})
}

// 1行に1数字しかない場合にのみ使う
function parseFirstNumber(line: string): number {
    return parseInt(line, 10);
}

function solveSyoujin43(inputs:string[]) {
    const N = parseInt(inputs[0])
    const flag: number[][] = []

    for (let lineNumber = 1; lineNumber < 1+N; lineNumber++) {
        const line = parseSpaceSeparatedLineToNumberArray(inputs[lineNumber])
        flag.push(line)
    }
}

const inputSyoujin43 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin43(inputSyoujin43)