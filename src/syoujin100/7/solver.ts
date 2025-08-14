function solveSyoujin100_7(inputs:string[]) {
    const N = parseInt(inputs[0], 10)
    const pillarCoordinatesMap = new Map<number, Map<number, boolean>>()
    const pillarCoordinatesList: number[][] = []
    for (let index = 1; index < inputs.length; index++) {
        const [X, Y] = inputs[index].split(" ").map((x) => {return parseInt(x, 10)})
        pillarCoordinatesMap.set(X, new Map([[Y, true]]))
        pillarCoordinatesList.push(
            [X, Y]
        )
    }

    let sizeOfMostBiggestSquare = 0
    for (const pillarACoordinate of pillarCoordinatesList) {
        for (const pillarBCoordinate of pillarCoordinatesList) {
            // 2つの柱で構成される正方形が存在するか判定
            if (!(isExistSquareMadeWithPillarAandB(pillarACoordinate, pillarBCoordinate, pillarCoordinatesMap))) {
                continue
            }
            

            // 存在していれば正方形の面積を算出し、最大のものか更新
            let distanceBetweenPillarAandPillarB = Math.sqrt(
                (pillarACoordinate[0] - pillarBCoordinate[0])**2 + 
                (pillarACoordinate[1] - pillarBCoordinate[1])**2
            )
            sizeOfMostBiggestSquare = Math.max(
                sizeOfMostBiggestSquare,
                distanceBetweenPillarAandPillarB**2
            )
        }
    }

    console.log(sizeOfMostBiggestSquare)

    function isExistSquareMadeWithPillarAandB(pillarACoordinate: number[], pillarBCoordinate: number[], pillarCoordinatesMap: Map<number, Map<number, boolean>>): boolean {
        return true
    }
}

const inputSyoujin100_7 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solve(inputSyoujin100_7)