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

        // dp[i][w] = 容量wに対して荷物の最初のi個を利用した時の価値の最大値
        const dp: number[][] = Array(N + 1).fill(0).map(() => Array(W + 1).fill(0))

        for (let n = 1; n < N + 1; n++) {
            const currentLuggage = luggages[n-1]

            for (let w = 0; w < W + 1; w++) {
                
                // currentLuggageを使うケース
                let valueInCaseUsingCurrentLuggage = - 1
                if (currentLuggage.weight <= w) {
                    valueInCaseUsingCurrentLuggage = dp[n - 1][w - currentLuggage.weight] + currentLuggage.value
                }
                // currentLuggageを使わないケース
                const valueInCaseNotUsingCurrentLuggage = dp[n][w] = dp[n - 1][w]

                dp[n][w] = Math.max(
                    valueInCaseUsingCurrentLuggage, valueInCaseNotUsingCurrentLuggage
                )
            }
            
        }

        return dp[N][W]
    }

    console.log(solveWithBottomUpDP(W, luggages))
}

const inputSyoujin35 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin35(inputSyoujin35)