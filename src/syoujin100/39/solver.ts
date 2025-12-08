function parseSpaceSeparatedLineToNumberArray(line:string): number[] {
    return line.split(" ").map((char) => {return parseInt(char, 10)})
}

// 1行に1数字しかない場合にのみ使う
function parseFirstNumber(line: string): number {
    return parseInt(line, 10);
}

function solveSyoujin39(inputs:string[]) {
    const N = parseFirstNumber(inputs[0])
    const numbers = parseSpaceSeparatedLineToNumberArray(inputs[1])

    const numberOfSpaceCanSetOperator = N-1-1

    const dp = Array.from({length:numberOfSpaceCanSetOperator+1}, () => {
        return Array.from({length:20+1}, () => 0n)
    })
    dp[0][numbers[0]] = 1n

    for (let currentSpaceNumber = 1; currentSpaceNumber < numberOfSpaceCanSetOperator+1; currentSpaceNumber++) {
        for (let targetValue = 0; targetValue < 21; targetValue++) {
            // +を入れるケース
            if (targetValue-numbers[currentSpaceNumber] >= 0 && targetValue-numbers[currentSpaceNumber] <= 20) {
                dp[currentSpaceNumber][targetValue] += dp[currentSpaceNumber-1][targetValue-numbers[currentSpaceNumber]]
            }
            // -を入れるケース
            if (targetValue+numbers[currentSpaceNumber] >= 0 && targetValue+numbers[currentSpaceNumber] <= 20) {
                dp[currentSpaceNumber][targetValue] += dp[currentSpaceNumber-1][targetValue+numbers[currentSpaceNumber]]
            }
        }
    }

    console.log(dp[numberOfSpaceCanSetOperator][numbers[N-1]].toString())
}

const inputSyoujin39 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin39(inputSyoujin39)