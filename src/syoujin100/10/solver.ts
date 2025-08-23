function solveSyoujin100_10(inputs:string[]) {
    const [N, M] = inputs[0].split(" ").map((char) => {return parseInt(char, 10)})

    const lightAndConnectedSwitch: Map<number, Set<number>> = new Map()
    for (let index = 1; index < 1 + M; index++) {
        const parsedLine = inputs[index].split(" ").map((char) => {return parseInt(char, 10)})
        lightAndConnectedSwitch.set(index, new Set(parsedLine.slice(1)))
    }

    const pi = inputs[inputs.length-1].split(" ").map((char) => {return parseInt(char, 10)})

    for (let bitNumber = 0; bitNumber < Math.pow(2, N); bitNumber++) {
        const switchNumToOnOffMapBasedBitNumber = convertBitNumberToOnOffPattern(bitNumber, N)
        console.log(switchNumToOnOffMapBasedBitNumber)
    }

    console.log(N, M, lightAndConnectedSwitch, pi)

    function convertBitNumberToOnOffPattern(bitNumber: number, N:number): Map<number, boolean> {
        const switchNumToOnOffMap = new Map<number, boolean>()
        for (let shiftCount = 0; shiftCount < N; shiftCount++) {
            // Bitの桁の1がOn, 0がOffに対応
            switchNumToOnOffMap.set(shiftCount, ((bitNumber >> shiftCount) & 1) == 1 ? true:false)
        }
        return switchNumToOnOffMap
    }
}

const inputSyoujin100_10 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin100_10(inputSyoujin100_10)