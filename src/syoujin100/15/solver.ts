function parseSpaceSeparatedLineToNumberArray(line:string): number[] {
    return line.split(" ").map((char) => {return parseInt(char, 10)})
}

function solveSyoujin15(inputs:string[]) {
    const [N] = parseSpaceSeparatedLineToNumberArray(inputs[0])
    const cityCoordinates: [number, number][] = []
    for (let line = 1; line < inputs.length; line++) {
        const [x, y] = parseSpaceSeparatedLineToNumberArray(
            inputs[line]
        )
        cityCoordinates.push([x, y])
    }
}

const inputSyoujin15 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin15(inputSyoujin15)