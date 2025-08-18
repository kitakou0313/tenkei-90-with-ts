function solveSyoujin8(inputs:string[]) {
    const N =  parseInt(inputs[0], 10)
    const AGridsCustomerVisit: number[] = []
    const BGridsCustomerVisit: number[] = []
    const gridsCustomerVisit: [number, number][] = []

    for (let index = 1; index < inputs.length; index++) {
        const [A, B] = inputs[index].split(" ").map((char) => {return parseInt(char, 10)})
        AGridsCustomerVisit.push(A)
        BGridsCustomerVisit.push(B)
        gridsCustomerVisit.push([A, B])
    }

    let minDistanceSum = Infinity
    for (const entranceCandidate of AGridsCustomerVisit) {
        for (const exitCandidate of BGridsCustomerVisit) {
            minDistanceSum = Math.min(minDistanceSum, calcAllDistancesFromEntranceToExit(entranceCandidate, exitCandidate, gridsCustomerVisit))
        }
    }
    console.log(minDistanceSum)

    function calcAllDistancesFromEntranceToExit(entrance: number,exit: number, gridsCustomerVisit: [number, number][]) {
        let distanceSum = 0
        for (const grid of gridsCustomerVisit) {
            distanceSum += Math.abs(entrance - grid[0])
            distanceSum += Math.abs(grid[0] - grid[1])
            distanceSum += Math.abs(grid[1] - exit)
        }

        return distanceSum
    }

}

const inputSyoujin8 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin8(inputSyoujin8)