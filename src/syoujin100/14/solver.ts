function parseSpaceSeparatedLineToNumberArray(line:string): number[] {
    return line.split(" ").map((char) => {return parseInt(char, 10)})
}

function solveSyoujin14(inputs:string[]) {
    const [N, K] = parseSpaceSeparatedLineToNumberArray(inputs[0])
    const buildingHeights = parseSpaceSeparatedLineToNumberArray(inputs[1])

    for (let bitNumber = 0; bitNumber < N; bitNumber++) {
       
        const selectedBuildingNumberSet = convertBitNumberToBuildingIndexSet(bitNumber, N)
    }

    function convertBitNumberToBuildingIndexSet(bitNumber:number, N:number):Set<number> {
        const buildingIndexSet = new Set<number>()

        for (let shiftNumber = 0; shiftNumber < N; shiftNumber++) {
            if ((bitNumber >> shiftNumber & 1) == 1) {
                buildingIndexSet.add(shiftNumber)
            }
        }

        return buildingIndexSet
    }
}

const inputSyoujin14 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin14(inputSyoujin14)