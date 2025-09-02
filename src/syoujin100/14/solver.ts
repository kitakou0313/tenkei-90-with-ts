function parseSpaceSeparatedLineToNumberArray(line:string): number[] {
    return line.split(" ").map((char) => {return parseInt(char, 10)})
}

function solveSyoujin14(inputs:string[]) {
    const [N, K] = parseSpaceSeparatedLineToNumberArray(inputs[0])
    const buildingHeights = parseSpaceSeparatedLineToNumberArray(inputs[1])

    let leastCost = Number.POSITIVE_INFINITY
    for (let bitNumber = 0; bitNumber < Math.pow(2, N); bitNumber++) {
        let sumOfNeededHeights = 0

        const buildingHeightsAfterAddingHeight = Array.from(buildingHeights)
        const selectedBuildingNumberArray = convertBitNumberToBuildingIndexSet(bitNumber, N)

        for (const selectedBuildinNumber of selectedBuildingNumberArray) {
            const neededHeight = calcHeightNeededToBeVisible(buildingHeights, selectedBuildinNumber)
            buildingHeightsAfterAddingHeight[selectedBuildinNumber] += neededHeight
            sumOfNeededHeights += neededHeight
        }

        leastCost = Math.min(leastCost, sumOfNeededHeights)
    }

    console.log(leastCost)

    function convertBitNumberToBuildingIndexSet(bitNumber:number, N:number):number[] {
        const buildingIndexList: number[] = []

        for (let shiftNumber = 0; shiftNumber < N; shiftNumber++) {
            if ((bitNumber >> shiftNumber & 1) == 1) {
                buildingIndexList.push(shiftNumber)
            }
        }

        return buildingIndexList
    }

    function calcHeightNeededToBeVisible(buildingHeights: number[], selectedBuildingNumber: number): number {
        for (let j = 0; j < selectedBuildingNumber; j++) { 
        }
    }
}

const inputSyoujin14 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin14(inputSyoujin14)