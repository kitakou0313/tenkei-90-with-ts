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

    function calcMinCoinNumber(coins: number[], trgValue:number):number {
        console.log(trgValue)
        if (trgValue === 1) {
            return 1
        }
        if(trgValue === 0){
            return 0
        }

        let minCoinNum = Number.MAX_SAFE_INTEGER
        for (const coin of coins) {
            if (coin > trgValue) {
                continue
            }
            minCoinNum = Math.min(
                minCoinNum,
                1 + calcMinCoinNumber(coins, trgValue - coin)
            )
        }

        return minCoinNum
    }

    console.log(calcMinCoinNumber(coins, n))
}

const inputSyoujin37 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin37(inputSyoujin37)