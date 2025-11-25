function parseSpaceSeparatedLineToNumberArray(line:string): number[] {
    return line.split(" ").map((char) => {return parseInt(char, 10)})
}

// 1行に1数字しかない場合にのみ使う
function parseFirstNumber(line: string): number {
    return parseInt(line, 10);
}

function solveSyoujin38(inputs:string[]) {
    function calcLengthOfLCS(X:string, Y:string): number {
        const m = X.length
        const n = Y.length

        // dp[i][j]...i文字目とj文字目までのLCS
        const dp: number[][] = Array.from({length:m}, () => {
            return Array.from({length:n}, () => 0)
        })

        let maxLength = 0;

        for (let i = 1; i < m+1; i++) {
            for (let j = 1; j < n+1; j++) {
                if (X[i-1] === Y[j-1]) {
                    dp[i][j] = dp[i-1][j-1]+1
                    maxLength = Math.max(maxLength, dp[i][j])
                }
                
            }
            
        }
        return maxLength
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