function parseSpaceSeparatedLineToNumberArray(line:string): number[] {
    return line.split(" ").map((char) => {return parseInt(char, 10)})
}

// 1行に1数字しかない場合にのみ使う
function parseFirstNumber(line: string): number {
    return parseInt(line, 10);
}

function solveA(inputs:string[]) {
    const S = inputs[0]

    console.log(S.length % 5 == 0 ? "Yes":"No")
}

const inputA = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveA(inputA)