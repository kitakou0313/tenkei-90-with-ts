function parseSpaceSeparatedLineToNumberArray(line:string): number[] {
    return line.split(" ").map((char) => {return parseInt(char, 10)})
}

// 1行に1数字しかない場合にのみ使う
function parseFirstNumber(line: string): number {
    return parseInt(line, 10);
}

function solveSyoujin38(inputs:string[]) {
    function calcMaximumLCSLengthByRecursive(X:string, Y:string):number {
        const memo: Map<string, number> = new Map()
        
        function helper(i: number, j: number):number {
            const M = X.length
            const N = Y.length

            const key = `${i}-${j}`
            const resInMemo = memo.get(key)
            if (typeof resInMemo !== "undefined") {
                return resInMemo
            }
            
            if (i === M || j == N) {
                return 0
            }
            if (X[i] === Y[j]) {
                return 1 + helper(i + 1, j + 1);
            }
            return Math.max(
                helper(i + 1, j),
                helper(i, j + 1)
            )
        }

        return helper(0, 0)
    }
    
    
    function calcLengthOfLCS(X:string, Y:string): number {
        const M = X.length
        const N = Y.length

        // dp[i][j]...i文字目とj文字目までのLCS
        const dp: number[][] = Array.from({length:M+1}, () => {
            return Array.from({length:N+1}, () => 0)
        })

        for (let i = 1; i < M+1; i++) {
            for (let j = 1; j < N+1; j++) {
                if (X[i-1] === Y[j-1]) {
                    dp[i][j] = Math.max(dp[i - 1][j - 1] + 1,dp[i - 1][j],dp[i][j - 1]);
                }else{
                    dp[i][j] = Math.max(dp[i - 1][j],dp[i][j - 1]);
                }
                
            }
            
        }
        return dp[M][N]
    }
    const N = parseFirstNumber(inputs[0])

    const ansList: number[] = []
    for (let datasetNumber = 1; datasetNumber < N + 1; datasetNumber++) {
        const X = inputs[2 * (datasetNumber-1) + 1]
        const Y = inputs[2 * (datasetNumber-1) + 2]
        
        ansList.push(calcLengthOfLCS(X, Y))
    }

    for (const ans of ansList) {
        console.log(ans)
    }
}

const inputSyoujin38 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin38(inputSyoujin38)