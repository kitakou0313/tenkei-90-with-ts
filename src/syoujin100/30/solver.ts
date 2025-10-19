function parseSpaceSeparatedLineToNumberArray(line:string): number[] {
    return line.split(" ").map((char) => {return parseInt(char, 10)})
}

// 1行に1数字しかない場合にのみ使う
function parseFirstNumber(line: string): number {
    return parseInt(line, 10);
}

function solveSyoujin30(inputs:string[]) {
    const [H, W, N] = parseSpaceSeparatedLineToNumberArray(inputs[0])
    const cityMap : string[][] = []
    for (let lineNumber = 1; lineNumber < inputs.length; lineNumber++) {
        cityMap.push(
            inputs[lineNumber].split("")
        ) 
    }

    console.log(H, W, N, cityMap)
}

const inputSyoujin30 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin30(inputSyoujin30)