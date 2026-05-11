function parseSpaceSeparatedLineToNumberArray(line:string): number[] {
    return line.split(" ").map((char) => {return parseInt(char, 10)})
}

// 1行に1数字しかない場合にのみ使う
function parseFirstNumber(line: string): number {
    return parseInt(line, 10);
}

function solveC(inputs:string[]) {
    const Q = parseFirstNumber(inputs[0])
    const queriesList: [string, number][] = []

    for (let q = 1; q < 1+Q; q++) {
        const [queryType, hString] = inputs[q].split(" ")
        queriesList.push(
            [queryType, parseInt(hString, 10)]
        )
        
    }
}

const inputC = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveC(inputC)