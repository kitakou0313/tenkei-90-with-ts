function solveSyoujin100_10(inputs:string[]) {
    const M = parseInt(inputs[0], 10)
    const starsInConstellationCoordinates: [number, number][] = []
    for (let index = 1; index < M + 1; index++) {
        const [X, Y] = inputs[index].split(" ").map((char) => {return parseInt(char, 10)})
        starsInConstellationCoordinates.push([X, Y])
    }
    const N = parseInt(inputs[M + 1], 10)
    const starsInSkyCoordinates: [number, number][] = []
    const starsInSkyMap: Map<number, Set<number>> = new Map()
    for (let index = M + 2; index < inputs.length; index++) {
        const [X, Y] = inputs[index].split(" ").map((char) => {return parseInt(char, 10)})
        starsInSkyCoordinates.push([X, Y])

        if (!starsInSkyMap.has(X)) {
            starsInSkyMap.set(X, new Set<number>())
        }
        starsInSkyMap.get(X)?.add(Y)
    }

    let [resX, resY] = [0, 0]
    let isAnswerIsFound = false
    for (const starInConstellation of starsInConstellationCoordinates) {
        for (const starInSky of starsInSkyCoordinates) {
            const [dX, dY] = [starInSky[0] - starInConstellation[0] , starInSky[1] - starInConstellation[1]]
            if (isStarsInConstellationEnableToMoveWithPallarelMove(dX, dY, starsInConstellationCoordinates, starsInSkyMap)) {
                [resX, resY] = [dX, dY]
                isAnswerIsFound = true
                break
            }
        }

        if (isAnswerIsFound) {
            break
        }
    }

    console.log(resX, resY)

    function isStarsInConstellationEnableToMoveWithPallarelMove(dx:number, dy:number, starsInConstellation: [number, number][], starInSkyMap: Map<number, Set<number>>): boolean {
        for (const starInConstellation of starsInConstellation) {
            const [XAfterPallaMove, YAfterPallaMove] = [
                starInConstellation[0] + dx, starInConstellation[1] + dy
            ]
            if (!starInSkyMap.get(XAfterPallaMove)?.has(YAfterPallaMove)) {
                return false
            }
        }

        return true
    }
}

const inputSyoujin100_10 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin100_10(inputSyoujin100_10)