function parseSpaceSeparatedLineToNumberArray(line:string): number[] {
    return line.split(" ").map((char) => {return parseInt(char, 10)})
}

// 1行に1数字しかない場合にのみ使う
function parseFirstNumber(line: string): number {
    return parseInt(line, 10);
}

function solveSyoujin33(inputs:string[]) {
    const [H, W] = parseSpaceSeparatedLineToNumberArray(inputs[0])
    const grids: string[][] = []
    for (let lineNumber = 1; lineNumber < inputs.length; lineNumber++) {
        grids.push(inputs[lineNumber].split(""))
    }
}

const inputSyoujin33 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin33(inputSyoujin33)