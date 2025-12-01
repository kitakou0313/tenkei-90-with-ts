function parseSpaceSeparatedLineToNumberArray(line:string): number[] {
    return line.split(" ").map((char) => {return parseInt(char, 10)})
}

// 1行に1数字しかない場合にのみ使う
function parseFirstNumber(line: string): number {
    return parseInt(line, 10);
}

function solveSyoujin37(inputs:string[]) {
    const [n, m] = parseSpaceSeparatedLineToNumberArray(inputs[0])
    const coins = parseSpaceSeparatedLineToNumberArray(inputs[1])

    function calcMinCoinNumberWithBottomupDP(coins: number[], trgValue:number): number {
        const dp: number[] = Array.from({length: trgValue + 1}, () => Number.MAX_SAFE_INTEGER)
        dp[0] = 0

        for (let value = 1; value < trgValue + 1; value++) {
            for (let coinIndex = 0; coinIndex < coins.length; coinIndex++) {
                const currentCoin = coins[coinIndex]
                if (currentCoin > value) {
                    continue
                }

                dp[value] = Math.min(dp[value], dp[value - currentCoin] + 1)

            }
        }
        
        return dp[trgValue]
    }

    function calcMinCoinNumber(coins: number[], trgValue:number):number {
        const dp: number[] = Array.from({length:trgValue + 1}, () => Number.MAX_SAFE_INTEGER)
        dp[0] = 0
        dp[1] = 1
        function helper(coins: number[], trgValue:number): number {
            let minCoinNum = Number.MAX_SAFE_INTEGER
            for (const coin of coins) {
                if (coin > trgValue) {
                    continue
                }
                console.log(trgValue - coin, dp[trgValue - coin] !== Number.MAX_SAFE_INTEGER)
                if (dp[trgValue - coin] !== Number.MAX_SAFE_INTEGER) {
                    minCoinNum = Math.min(
                        minCoinNum,
                        1 + dp[trgValue - coin]
                    )
                    continue
                }
                minCoinNum = Math.min(
                    minCoinNum,
                    1 + helper(coins, trgValue - coin)
                )
            }
            dp[trgValue] = minCoinNum

            return minCoinNum
        }

        return helper(coins, trgValue)
    }

    console.log(calcMinCoinNumberWithBottomupDP(coins, n))
}

const inputSyoujin37 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin37(inputSyoujin37)