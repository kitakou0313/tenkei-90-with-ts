function parseSpaceSeparatedLineToNumberArray(line:string): number[] {
    return line.split(" ").map((char) => {return parseInt(char, 10)})
}

// 1行に1数字しかない場合にのみ使う
function parseFirstNumber(line: string): number {
    return parseInt(line, 10);
}

function solveSyoujin37(inputs:string[]) {
    const [n, m] = parseSpaceSeparatedLineToNumberArray(inputs[0])
    const coins = parseSpaceSeparatedLineToNumberArray(inputs[1])
}

const inputSyoujin37 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin37(inputSyoujin37)