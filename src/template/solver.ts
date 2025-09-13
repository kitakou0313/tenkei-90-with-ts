function parseSpaceSeparatedLineToNumberArray(line:string): number[] {
    return line.split(" ").map((char) => {return parseInt(char, 10)})
}

// 1行に1数字しかない場合にのみ使う
function parseFirstNumber(line: string): number {
    return parseInt(line, 10);
}

function solve(inputs:string[]) {
    
}

const inputTemplate = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solve(inputTemplate)