function parseSpaceSeparatedLineToNumberArray(line:string): number[] {
    return line.split(" ").map((char) => {return parseInt(char, 10)})
}

// 1行に1数字しかない場合にのみ使う
function parseFirstNumber(line: string): number {
    return parseInt(line, 10);
}

function solveSyoujin34(inputs:string[]) {
    const [ N ] = parseSpaceSeparatedLineToNumberArray(inputs[0])

    function calcNthFibNumWithBottomUpDP(N:number): number {
        const dp: number[] = Array.from({length:N+1}, () => 0)
        dp[0] = 1
        dp[1] = 1

        for (let fibNumIndex = 2; fibNumIndex < N + 1; fibNumIndex++) {
            dp[fibNumIndex] = dp[fibNumIndex - 1] + dp[fibNumIndex - 2] 
        }

        return dp[N]
    }

    function calcNthFibNum(n:number): number {
        const nthFibNumMap = new Map<number, number>()
        function helper(n:number): number {
            if (n === 0 || n === 1) {
                return 1
            }
            const nthFibNumInCache = nthFibNumMap.get(n)
            if (typeof nthFibNumInCache !== "undefined") {
                return nthFibNumInCache 
            }
            const nthFibNum = helper(n - 1) + helper(n - 2);
            nthFibNumMap.set(n, nthFibNum)
            return nthFibNum
        }

        return helper(n)
    }

    console.log(calcNthFibNum(N))

}

const inputSyoujin34 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin34(inputSyoujin34)