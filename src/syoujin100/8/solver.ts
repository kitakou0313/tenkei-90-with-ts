function solveSyoujin8(inputs:string[]) {
    const N =  parseInt(inputs[0], 10)
    const gridsCustomerVisit: [number, number][] = []
    for (let index = 1; index < inputs.length; index++) {
        const [A, B] = inputs[index].split(" ").map((char) => {return parseInt(char, 10)})
        gridsCustomerVisit.push([A, B])
    }

}

const inputSyoujin8 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin8(inputSyoujin8)