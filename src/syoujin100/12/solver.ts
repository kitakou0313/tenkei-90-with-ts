function solveSyoujin100_12(inputs:string[]) {
    const [N, M] = inputs[0].split(" ").map((char) => {return parseInt(char, 10)})
    const relationships: [number, number][] = []
    for (let lineNumber = 1; lineNumber < inputs.length; lineNumber++) {
        const [x, y] = inputs[lineNumber].split(" ").map((char) => {return parseInt(char, 10)})
        relationships.push(
            [x, y]
        )
    }
}

const inputSyoujin100_12 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin100_12(inputSyoujin100_12)