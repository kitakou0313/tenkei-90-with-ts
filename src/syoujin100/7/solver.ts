function solveSyoujin100_7(inputs:string[]) {
    const N = parseInt(inputs[0], 10)
    const pillar_coordinates: number[][] = []
    for (let index = 1; index < inputs.length; index++) {
        pillar_coordinates.push(inputs[index].split(" ").map((x) => {return parseInt(x, 10)}))
    }
}

const inputSyoujin100_7 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solve(inputSyoujin100_7)