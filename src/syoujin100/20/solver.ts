function parseSpaceSeparatedLineToNumberArray(line:string): number[] {
    return line.split(" ").map((char) => {return parseInt(char, 10)})
}

// 1行に1数字しかない場合にのみ使う
function parseFirstNumber(line: string): number {
    return parseInt(line, 10);
}

function solveSyoujin20(inputs:string[]) {
    const N = parseFirstNumber(inputs[0])
    const Ai_list = parseSpaceSeparatedLineToNumberArray(
        inputs[1]
    )
    const Bi_list = parseSpaceSeparatedLineToNumberArray(
        inputs[2]
    )
    const Ci_list = parseSpaceSeparatedLineToNumberArray(
        inputs[3]
    )
}

const inputSyoujin20 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin20(inputSyoujin20)