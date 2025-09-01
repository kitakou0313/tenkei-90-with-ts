function parseSpaceSeparatedLineToNumberArray(line:string): number[] {
    return line.split(" ").map((char) => {return parseInt(char, 10)})
}

function solve(inputs:string[]) {
    
}

const inputTemplate = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solve(inputTemplate)