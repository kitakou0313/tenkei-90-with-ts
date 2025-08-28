function solveSyoujin100_13(inputs:string[]) {
    const [R, C] = inputs[0].split(" ").map((char) => {return parseInt(char, 10)})
    const senbeiMap:number[][] = []
    for (let lineNumber = 1; lineNumber < inputs.length; lineNumber++) {
        senbeiMap.push(
            inputs[lineNumber].split(" ").map((char) => {return parseInt(char, 10)})
        )
    }

    for (let bitNumber = 0; bitNumber < Math.pow(2, R); bitNumber++) {
        const rowNumberSet = convertBitNumberToRowNumberSet(bitNumber, R)
    }

    function convertBitNumberToRowNumberSet(bitNumber: number, R: number): Set<number> {
        const rowNumberSet = new Set<number>()
        for (let shiftNumber = 0; shiftNumber < R; shiftNumber++) {
            if (((bitNumber >> shiftNumber) & 1) == 1) {
                rowNumberSet.add(shiftNumber)
            }
        }

        return rowNumberSet
    }
}

const inputSyoujin100_13 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin100_13(inputSyoujin100_13)