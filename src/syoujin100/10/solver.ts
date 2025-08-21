function solveSyoujin100_10(inputs:string[]) {
    const [N, M] = inputs[0].split(" ").map((char) => {return parseInt(char, 10)})

    const lightAndConnectedSwitch: Map<number, Set<number>> = new Map()
    for (let index = 1; index < 1 + M; index++) {
        const parsedLine = inputs[index].split(" ").map((char) => {return parseInt(char, 10)})
        lightAndConnectedSwitch.set(index, new Set(parsedLine.slice(1)))
    }

    const pi = inputs[inputs.length-1].split(" ").map((char) => {return parseInt(char, 10)})

    for (let bitNunber = 0; bitNunber < Math.pow(2, N); bitNunber++) {
        console.log(bitNunber)
    }

    console.log(N, M, lightAndConnectedSwitch, pi)
}

const inputSyoujin100_10 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin100_10(inputSyoujin100_10)