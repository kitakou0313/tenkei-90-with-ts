function solveSyoujin100_12(inputs:string[]) {
    const [N, M] = inputs[0].split(" ").map((char) => {return parseInt(char, 10)})
    const relationships: [number, number][] = []
    for (let lineNumber = 1; lineNumber < inputs.length; lineNumber++) {
        const [x, y] = inputs[lineNumber].split(" ").map((char) => {return parseInt(char, 10)})
        relationships.push(
            [x, y]
        )
    }

    let maxFuctionSetSize = 0
    for (let bitNumber = 0; bitNumber < Math.pow(2, N); bitNumber++) {
        const fuctionSet = convertBitNumberToFuction(bitNumber, N)
        maxFuctionSetSize = Math.max(maxFuctionSetSize, fuctionSet.size)
    }
    console.log(maxFuctionSetSize)

    function convertBitNumberToFuction(bitNumber:number, N:number):Set<number> {
        const fuctionSet = new Set<number>()
        for (let shiftNumber = 0; shiftNumber < N; shiftNumber++) {
            if (((bitNumber >> shiftNumber) & 1) == 1) {
                fuctionSet.add(shiftNumber + 1)
            }
        }
        return fuctionSet
    }
}

const inputSyoujin100_12 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin100_12(inputSyoujin100_12)