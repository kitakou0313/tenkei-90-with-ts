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

    const dp: number[][][] = Array.from({length : numberOfSpaceCanSetOperator + 1}, // 演算子を入れられる空白の数(N-1-1) + 初期状態の0用の1
        () => Array.from({length:2}, () => Array.from({length:2}, () => numbers[0])))

    for (let currentSpaceNumber = 1; currentSpaceNumber < numberOfSpaceCanSetOperator+1; currentSpaceNumber++) {
        // 0 -> +, 1 -> - を指す
        for (let operatorInCurrentSpace = 0; operatorInCurrentSpace < 2; operatorInCurrentSpace++) {
            for (let operatorInSpaceBeforeCurrentSpace = 0; operatorInSpaceBeforeCurrentSpace < 2; operatorInSpaceBeforeCurrentSpace++) {
                for (let operatorInSpaceBeforeBeforeCurrentSpace = 0; operatorInSpaceBeforeBeforeCurrentSpace < 2; operatorInSpaceBeforeBeforeCurrentSpace++) {
                    let resOfOperation = Number.MAX_SAFE_INTEGER
                    const resOfSubProblem = dp[currentSpaceNumber-1][operatorInSpaceBeforeCurrentSpace][operatorInSpaceBeforeBeforeCurrentSpace]
                    if(isNaN(resOfSubProblem)){
                        if (operatorInCurrentSpace === 0) {
                            resOfOperation = resOfSubProblem + numbers[currentSpaceNumber]
                        }else{
                            resOfOperation = resOfSubProblem - numbers[currentSpaceNumber]
                        }
                        dp[currentSpaceNumber][operatorInCurrentSpace][operatorInSpaceBeforeCurrentSpace] = resOfOperation >= 0 && resOfOperation <= 20 ? resOfOperation : Number.NaN
                    }else{
                        dp[currentSpaceNumber][operatorInCurrentSpace][operatorInSpaceBeforeCurrentSpace] = Number.NaN
                    }
                }
            }
        }
    }

    console.log(dp)
    let countOfValidExpression = 0
    for (let operatorNumberOfLast = 0; operatorNumberOfLast < 2; operatorNumberOfLast++) {
        for (let operatorNumberOfSecondToLast = 0; operatorNumberOfSecondToLast < 2; operatorNumberOfSecondToLast++) {
            countOfValidExpression += dp[N-1-1][operatorNumberOfLast][operatorNumberOfSecondToLast] == numbers[N-1] ? 1 : 0
        }
    }

    console.log(countOfValidExpression)
}

const inputSyoujin39 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin39(inputSyoujin39)