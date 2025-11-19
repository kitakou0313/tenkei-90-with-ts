function parseSpaceSeparatedLineToNumberArray(line:string): number[] {
    return line.split(" ").map((char) => {return parseInt(char, 10)})
}

// 1行に1数字しかない場合にのみ使う
function parseFirstNumber(line: string): number {
    return parseInt(line, 10);
}

function solveSyoujin36(inputs:string[]) {
    const [N, W] = parseSpaceSeparatedLineToNumberArray(inputs[0])
    const luggages: {value:number, weight:number}[] = []
    for (let lineNumber = 1; lineNumber < inputs.length; lineNumber++) {
        const [vi, wi] = parseSpaceSeparatedLineToNumberArray(inputs[lineNumber])
        luggages.push({value:vi, weight:wi})
    }

    function calcMaxValue(luggages: {value:number, weight:number}[], maxW:number): number {
        const dp: number[] = Array.from({length:maxW + 1}, () => 0)
        // Wでの最大の価値を算出
        function calcMaxValueWithW(luggages: {value:number, weight:number}[], maxW:number): number {
            for (let w = 1; w < maxW+1; w++) {
                let maximumValue = 0
                for (let luggagesIndex = 0; luggagesIndex < luggages.length; luggagesIndex++) {
                    const currentLuggage = luggages[luggagesIndex];
                    if (currentLuggage.weight <= w) {
                        const newValue = dp[w - currentLuggage.weight] + currentLuggage.value
                        maximumValue = Math.max(maximumValue, newValue)
                    }
                }
                dp[w] = maximumValue
            }

            return dp[maxW]
        }

        return calcMaxValueWithW(luggages, maxW)
    }

    console.log(calcMaxValue(luggages, W))
}

const inputSyoujin36 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin36(inputSyoujin36)