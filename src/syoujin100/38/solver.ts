function parseSpaceSeparatedLineToNumberArray(line:string): number[] {
    return line.split(" ").map((char) => {return parseInt(char, 10)})
}

// 1行に1数字しかない場合にのみ使う
function parseFirstNumber(line: string): number {
    return parseInt(line, 10);
}

function solveSyoujin38(inputs:string[]) {
    const N = parseFirstNumber(inputs[0])

    const ansList: number[] = []
    for (let datasetNumber = 1; datasetNumber <= N; datasetNumber++) {
        const X = inputs[2 * (datasetNumber-1) + 1]
        const Y = inputs[2 * (datasetNumber-1) + 2]
        
        console.log(X, Y)
    }

    for (const ans of ansList) {
        console.log(ans)
    }
}

const inputSyoujin38 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin38(inputSyoujin38)