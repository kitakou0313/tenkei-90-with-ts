function parseSpaceSeparatedLineToNumberArray(line:string): number[] {
    return line.split(" ").map((char) => {return parseInt(char, 10)})
}

// 1行に1数字しかない場合にのみ使う
function parseFirstNumber(line: string): number {
    return parseInt(line, 10);
}

function solveSyoujin35(inputs:string[]) {
    const [N, W] = parseSpaceSeparatedLineToNumberArray(inputs[0])
    const luggages: {value:number, weight:number}[] = []
    for (let lineNumber = 1; lineNumber < inputs.length; lineNumber++) {
        const [v, w] = parseSpaceSeparatedLineToNumberArray(inputs[lineNumber])
        luggages.push({
            value: v,
            weight:w
        })
    }
}

const inputSyoujin35 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin35(inputSyoujin35)