function parseSpaceSeparatedLineToNumberArray(line:string): number[] {
    return line.split(" ").map((char) => {return parseInt(char, 10)})
}

// 1行に1数字しかない場合にのみ使う
function parseFirstNumber(line: string): number {
    return parseInt(line, 10);
}

function solveABC450a(inputs:string[]) {
    const N = parseFirstNumber(inputs[0])

    let resStr = ""
    for (let number = N; number > 0; number--) {
        resStr += `${number},`
    }

    console.log(resStr.slice(0, resStr.length-1))
}

const inputABC450a = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveABC450a(inputABC450a)