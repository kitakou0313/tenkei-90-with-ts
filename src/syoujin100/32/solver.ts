function parseSpaceSeparatedLineToNumberArray(line:string): number[] {
    return line.split(" ").map((char) => {return parseInt(char, 10)})
}

// 1行に1数字しかない場合にのみ使う
function parseFirstNumber(line: string): number {
    return parseInt(line, 10);
}

function solveSyoujin32(inputs:string[]) {
    let lineNumber = 0
    let resList: number[] = []
    while (inputs[lineNumber] !== "0 0") {
        const [W, H] = parseSpaceSeparatedLineToNumberArray(inputs[lineNumber])


    }

    for (const res of resList) {
        console.log(res)
    }
}

const inputSyoujin32 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin32(inputSyoujin32)