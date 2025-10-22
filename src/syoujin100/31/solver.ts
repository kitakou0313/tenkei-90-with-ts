function parseSpaceSeparatedLineToNumberArray(line:string): number[] {
    return line.split(" ").map((char) => {return parseInt(char, 10)})
}

// 1行に1数字しかない場合にのみ使う
function parseFirstNumber(line: string): number {
    return parseInt(line, 10);
}

function solveSyoujin31(inputs:string[]) {
    const [W, H] = parseSpaceSeparatedLineToNumberArray(inputs[0])
    const grids: string[][] = []
    for (let lineNumber = 1; lineNumber < inputs.length; lineNumber++) {
        grids.push(
            inputs[lineNumber].split("")
        )
    }

    const dw = [ 0, 1,1,1,0,-1]
    const dh = [-1,-1,0,1,1, 0]

    for (let w = 0; w < W; w++) {
        for (let h = 0; h < H; h++) {
        
        }       
    }
}

const inputSyoujin31 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin31(inputSyoujin31)