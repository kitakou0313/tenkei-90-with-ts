function solveSyoujin100_7(inputs:string[]) {
    const N = parseInt(inputs[0], 10)
    const pillarCoordinatesMap = new Map<number, Map<number, boolean>>()
    const pillarCoordinatesList: [number, number][] = []
    for (let index = 1; index < inputs.length; index++) {
        const [X, Y] = inputs[index].split(" ").map((x) => {return parseInt(x, 10)})

        if (!pillarCoordinatesMap.has(X)) {
            pillarCoordinatesMap.set(X, new Map())
        } 
        pillarCoordinatesMap.get(X)?.set(Y, true)

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
            sizeOfMostBiggestSquare = Math.max(
                sizeOfMostBiggestSquare,
                (pillarACoordinate[0] - pillarBCoordinate[0])**2 + (pillarACoordinate[1] - pillarBCoordinate[1])**2
            )
        }
    }

    console.log(sizeOfMostBiggestSquare)

    function isExistSquareMadeWithPillarAandB(pillarACoordinate: [number, number], pillarBCoordinate: [number, number], pillarCoordinatesMap: Map<number, Map<number, boolean>>): boolean {
        // 一つの柱からできる正方形には2通りが考えられるが、面積は変わらない
        // そのためどちらか片方が構成できれば構成できるとして返して良い
        
        // X軸の変量とY軸の変量を求める
        let xDiff = pillarACoordinate[0] - pillarBCoordinate[0]
        let yDiff = pillarACoordinate[1] - pillarBCoordinate[1]
        let diffsBetweenAandB = [yDiff, xDiff]

        // X軸のみ変量を反転させ、対応する柱が存在するか確認
        let trgPillarFromACoordinates: [number, number] = [pillarACoordinate[0] - diffsBetweenAandB[0], pillarACoordinate[1] + diffsBetweenAandB[1]]
        let trgPillarFromBCoordinates: [number, number] = [pillarBCoordinate[0] - diffsBetweenAandB[0], pillarBCoordinate[1] + diffsBetweenAandB[1]]
        if (
            pillarCoordinatesMap.get(trgPillarFromACoordinates[0])?.has(trgPillarFromACoordinates[1]) && 
            pillarCoordinatesMap.get(trgPillarFromBCoordinates[0])?.has(trgPillarFromBCoordinates[1]) 
        ) {
            return true
        }

        // Y軸のみ変量を反転させ、対応する柱が存在するか確認
        trgPillarFromACoordinates = [pillarACoordinate[0] + diffsBetweenAandB[0], pillarACoordinate[1] - diffsBetweenAandB[1]]
        trgPillarFromBCoordinates = [pillarBCoordinate[0] + diffsBetweenAandB[0], pillarBCoordinate[1] - diffsBetweenAandB[1]]
        if (
            pillarCoordinatesMap.get(trgPillarFromACoordinates[0])?.has(trgPillarFromACoordinates[1]) && 
            pillarCoordinatesMap.get(trgPillarFromBCoordinates[0])?.has(trgPillarFromBCoordinates[1]) 
        ) {
            return true
        }

        return false
    }
}

const inputSyoujin100_7 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin100_7(inputSyoujin100_7)