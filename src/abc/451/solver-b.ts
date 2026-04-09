function parseSpaceSeparatedLineToNumberArray(line:string): number[] {
    return line.split(" ").map((char) => {return parseInt(char, 10)})
}

// 1行に1数字しかない場合にのみ使う
function parseFirstNumber(line: string): number {
    return parseInt(line, 10);
}

function solveB(inputs:string[]) {
    const [H, W] = parseSpaceSeparatedLineToNumberArray(inputs[0])

    for (let h = 0; h < H; h++) {
        let row = ""

        for (let w = 0; w < W; w++) {
            let isThisGridIsOnEdge = false
            isThisGridIsOnEdge = (h == 0 || h == H-1) || (w == 0 || w == W-1)
            row += isThisGridIsOnEdge ? "#" : "."
        }
        
        console.log(row)
    }
}

const inputB = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveB(inputB)