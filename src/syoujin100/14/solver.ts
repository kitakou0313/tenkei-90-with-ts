function parseSpaceSeparatedLineToNumberArray(line:string): number[] {
    return line.split(" ").map((char) => {return parseInt(char, 10)})
}

function solveSyoujin14(inputs:string[]) {
    const [N, K] = parseSpaceSeparatedLineToNumberArray(inputs[0])
    const buildingHeights = parseSpaceSeparatedLineToNumberArray(inputs[1])
}

const inputSyoujin14 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin14(inputSyoujin14)