function solveSyoujin100_13(inputs:string[]) {
    const [R, C] = inputs[0].split(" ").map((char) => {return parseInt(char, 10)})
    const senbeiMap:number[][] = []
    for (let lineNumber = 1; lineNumber < inputs.length; lineNumber++) {
        senbeiMap.push(
            inputs[lineNumber].split(" ").map((char) => {return parseInt(char, 10)})
        )
    }

    console.log(R, C, senbeiMap)
}

const inputSyoujin100_13 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin100_13(inputSyoujin100_13)