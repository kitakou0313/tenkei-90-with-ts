function solve4(inputs:string[]) {
    const [H, V] = inputs.map((char) => {return parseInt(char, 10)})
    const masu: number[][] = []
    for (let index = 1; index <= H; index++) {
        masu.push(
            inputs[index].split(' ').map((char) => {return parseInt(char, 10)})
        )
    }

    console.log(masu)
}


const input4 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solve4(input4)