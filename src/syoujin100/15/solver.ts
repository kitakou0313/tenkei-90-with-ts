function parseSpaceSeparatedLineToNumberArray(line:string): number[] {
    return line.split(" ").map((char) => {return parseInt(char, 10)})
}

function solveSyoujin15(inputs:string[]) {
    const [N] = parseSpaceSeparatedLineToNumberArray(inputs[0])
    const cityCoordinates: [number, number][] = []
    for (let line = 1; line < inputs.length; line++) {
        const [x, y] = parseSpaceSeparatedLineToNumberArray(
            inputs[line]
        )
        cityCoordinates.push([x, y])
    }

    const citeIndexes = []
    for (let index = 0; index < N; index++) {
        citeIndexes.push(index)
        
    }
    const allPermutationsOfCities = generatePermutations(citeIndexes)

    let sumOfdistancesOfPermutationsOfCites = 0
    for (const permutationOfCities of allPermutationsOfCities) {
        for (let index = 0; index < permutationOfCities.length - 1; index++) {
            sumOfdistancesOfPermutationsOfCites += 
                calcDistanceBetweenToPoints(
                    cityCoordinates[permutationOfCities[index]],
                    cityCoordinates[permutationOfCities[index + 1]]
            )
        }
    }

    console.log(sumOfdistancesOfPermutationsOfCites / allPermutationsOfCities.length)

    function generatePermutations<T>(arr: T[]): T[][] {
        // Base case
        if (arr.length <= 1) return [arr];
        
        return arr.flatMap((element, index) => {
            const remaining = arr.filter((_, i) => i !== index);
            return generatePermutations(remaining).map(perm => [element, ...perm]);
   
        });
    }

    function calcDistanceBetweenToPoints(point1: [number, number], point2:[number, number]): number {
        return Math.sqrt(
            Math.pow(point1[0] - point2[0], 2) + Math.pow(point1[1] - point2[1], 2)
        )
    }

}

const inputSyoujin15 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin15(inputSyoujin15)