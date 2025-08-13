function solveSyoujin100_7(inputs:string[]) {
    const N = parseInt(inputs[0], 10)
    const pillar_coordinates_map = new Map<number, Map<number, boolean>>()
    for (let index = 1; index < inputs.length; index++) {
        const [X, Y] = inputs[index].split(" ").map((x) => {return parseInt(x, 10)})
        pillar_coordinates_map.set(X, new Map([[Y, true]]))
    }
}

const inputSyoujin100_7 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solve(inputSyoujin100_7)