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
    for (let lineNumber = 1; lineNumber < 1 + N; lineNumber++) {
        const [v, w] = parseSpaceSeparatedLineToNumberArray(inputs[lineNumber])
        luggages.push({
            value: v,
            weight:w
        })
    }

    function solveWithBottomUpDP(W:number, luggages: {value:number, weight:number}[]) {
        const N = luggages.length

        const dp: number[][] = Array.from({length : W + 1},() => Array.from({length: N + 1}, () => 0))

        for (let w = 0; w < W+1; w++) {
            for (let n = 1; n < N+1; n++) {
                const nthLuggage = luggages[n-1]
                // 荷物を使う時の価値の最大値
                const valueWithNthLuggages = w-nthLuggage.weight >= 0 ? dp[w-nthLuggage.weight][n-1]+nthLuggage.value : Number.MIN_SAFE_INTEGER
                // 荷物を使わない時の価値の最大値
                const valueWithOutNthLuggages = dp[w][n-1]

                dp[w][n] = Math.max(valueWithNthLuggages, valueWithOutNthLuggages)
                
            }
        }

        return dp[W][N]
    }

    console.log(solveWithBottomUpDP(W, luggages))
}

const inputSyoujin35 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin35(inputSyoujin35)