function parseSpaceSeparatedLineToNumberArray(line:string): number[] {
    return line.split(" ").map((char) => {return parseInt(char, 10)})
}

// 1行に1数字しかない場合にのみ使う
function parseFirstNumber(line: string): number {
    return parseInt(line, 10);
}

function solveSyoujin32(inputs:string[]) {
    let lineNumberOfQuestionInputStart = 0
    let resList: number[] = []
    while (inputs[lineNumberOfQuestionInputStart] !== "0 0") {
        const [W, H] = parseSpaceSeparatedLineToNumberArray(inputs[lineNumberOfQuestionInputStart])

        const maze: string[][] = []
        for (let lineNumber = lineNumberOfQuestionInputStart + 1; lineNumber < lineNumberOfQuestionInputStart + 1 + 2*H - 1; lineNumber++) {
            maze.push(inputs[lineNumber].split(""))
            
        }

        lineNumberOfQuestionInputStart += 2 * H
        
        // mazeからグラフを構成
        for (let y = 0; y < H; y++) {
            for (let x = 0; x < W; x++) {
                
            }
            
        }
    }

    for (const res of resList) {
        console.log(res)
    }
}

const inputSyoujin32 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin32(inputSyoujin32)