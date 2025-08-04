function solveSyoujin100_4(inputs:string[]) {
    const [N, M] = inputs[0].split(" ").map((x) => {return parseInt(x, 10)})
    const A_matrix: number[][] = []
    for (let index = 1; index < inputs.length; index++) {
        A_matrix.push(inputs[index].split(" ").map((x) => {return parseInt(x, 10)}))
    }

    console.log(N, M)
    console.log(A_matrix)
}

const inputSyoujin100_4 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin100_4(inputSyoujin100_4)