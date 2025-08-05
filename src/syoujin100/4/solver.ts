function solveSyoujin100_4(inputs:string[]) {
    const [N, M] = inputs[0].split(" ").map((x) => {return parseInt(x, 10)})
    const A_matrix: number[][] = []
    for (let index = 1; index < inputs.length; index++) {
        A_matrix.push(inputs[index].split(" ").map((x) => {return parseInt(x, 10)}))
    }

    let maxScore = -1
    for (let m1 = 0; m1 < M - 1; m1++) {
        for (let m2 = m1+1; m2 < M; m2++) {
            let scoreInCaseM1AndM2 = 0
            for (let n = 0; n < N; n++) {
                scoreInCaseM1AndM2 += Math.max(
                    A_matrix[n][m1], A_matrix[n][m2]
                )
            }
            maxScore = Math.max(maxScore, scoreInCaseM1AndM2)
        }
    }

    console.log(maxScore)
}

const inputSyoujin100_4 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin100_4(inputSyoujin100_4)