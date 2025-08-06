function solveSyoujin100_5(inputs:string[]) {
    const [A,B,C,X,Y] = inputs[0].split(" ").map(
        (char) => {return parseInt(char, 10)}
    )
    console.log(A, B, C, X, Y)
}

const inputSyoujin100_5 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin100_5(inputSyoujin100_5)