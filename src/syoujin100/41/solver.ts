function parseSpaceSeparatedLineToNumberArray(line:string): number[] {
    return line.split(" ").map((char) => {return parseInt(char, 10)})
}

// 1行に1数字しかない場合にのみ使う
function parseFirstNumber(line: string): number {
    return parseInt(line, 10);
}

function solveSyoujin41(inputs:string[]) {
    const [D, N] = parseSpaceSeparatedLineToNumberArray(inputs[0])
    const templeturesList: number[] = []
    const clothesParams :{minTemperature:number, maxTemperature:number, flashiness:number}[] = []
    for (let lineNumber = 1; lineNumber < 1+D; lineNumber++) {
        const Ti = parseFirstNumber(inputs[lineNumber])
        templeturesList.push(Ti)
    }
    for (let lineNumber = 1+D; lineNumber < 1+D+N; lineNumber++) {
        const [Ai, Bi, Ci] = parseSpaceSeparatedLineToNumberArray(inputs[lineNumber])
        clothesParams.push({
            minTemperature:Ai,
            maxTemperature:Bi,
            flashiness:Ci
        })
    }

    const dp: number[][] = []

    let maxScore = Number.MIN_SAFE_INTEGER
    for (let clothesNumber = 0; clothesNumber < N; clothesNumber++) {
        maxScore = Math.max(maxScore, dp[D][clothesNumber])
    }

    console.log(maxScore)

}

const inputSyoujin41 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin41(inputSyoujin41)