function parseSpaceSeparatedLineToNumberArray(line:string): number[] {
    return line.split(" ").map((char) => {return parseInt(char, 10)})
}

// 1行に1数字しかない場合にのみ使う
function parseFirstNumber(line: string): number {
    return parseInt(line, 10);
}

function solveSyoujin34(inputs:string[]) {
    const [ N ] = parseSpaceSeparatedLineToNumberArray(inputs[0])

    function calcFibNum(params:type): number {
        
    }

    console.log(calcFibNum(N))

}

const inputSyoujin34 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin34(inputSyoujin34)