function parseSpaceSeparatedLineToNumberArray(line:string): number[] {
    return line.split(" ").map((char) => {return parseInt(char, 10)})
}

// 1行に1数字しかない場合にのみ使う
function parseFirstNumber(line: string): number {
    return parseInt(line, 10);
}

function solveABC450b(inputs:string[]) {
    const N = parseFirstNumber(inputs[0])
    const Cij: number[][] = []

    for (let lineNumber = 1; lineNumber < 1+N-1; lineNumber++) {
        const cij = parseSpaceSeparatedLineToNumberArray(inputs[lineNumber])
        Cij.push(cij)
    }

    // a, b, cを全通り試してバリデーションでもよかった
    for (let a = 0; a < N-1; a++) {
        for (let c = a+1; c < N-1; c++) {
            const costAtoC = Cij[a][c]
            for (let b = a+1; b < c; b++) {
                const costAtoBtoC = Cij[a][b] + Cij[b][c]

                if (costAtoBtoC < costAtoC) {
                    console.log("Yes")
                }
            }
        }
        
    }

    console.log("No")

}

const inputABC450b = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveABC450b(inputABC450b)