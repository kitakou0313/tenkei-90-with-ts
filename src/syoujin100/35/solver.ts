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

    function calcMostValueSum(capacityOfKnapsack: number, luggages: {value:number, weight:number}[]): number {
        const addedToKnapsackLuggagesSet = new Set<number>()
        const weightToMostBiggestValue = new Map<se

        // 各荷物について、それを選んだ時と選ばなかった時の最大値をそれぞれ求め比較する
        for (let luggagesIndex = 0; luggagesIndex < luggages.length; luggagesIndex++) {
            
            const valueOfSelectingCase
            const valueOfNotSelectingCase
            
        }

    }

    console.log(calcMostValueSum(W, luggages))
}

const inputSyoujin35 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin35(inputSyoujin35)