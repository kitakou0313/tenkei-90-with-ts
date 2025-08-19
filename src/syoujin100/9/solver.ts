function solveSyoujin100_10(inputs:string[]) {
    const M = parseInt(inputs[0], 10)
    const constellationCoordinates: [number, number][] = []
    for (let index = 1; index < M + 1; index++) {
        const [X, Y] = inputs[index].split(" ").map((char) => {return parseInt(char, 10)})
        constellationCoordinates.push([X, Y])
    }
    const N = parseInt(inputs[M + 1], 10)
    const starCoordinates: [number, number][] = []
    for (let index = M + 2; index < inputs.length; index++) {
        const [X, Y] = inputs[index].split(" ").map((char) => {return parseInt(char, 10)})
        starCoordinates.push([X, Y])
    }

    console.log(M, N, constellationCoordinates, starCoordinates)
}

const inputSyoujin100_10 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin100_10(inputSyoujin100_10)