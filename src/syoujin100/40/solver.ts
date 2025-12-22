import { sourceMapsEnabled } from "process";

function parseSpaceSeparatedLineToNumberArray(line:string): number[] {
    return line.split(" ").map((char) => {return parseInt(char, 10)})
}

// 1行に1数字しかない場合にのみ使う
function parseFirstNumber(line: string): number {
    return parseInt(line, 10);
}

function calcSumOfArray<T>(array:Array<T>):T {
    const sum = array.reduce((accumulator, current) => accumulator + current, 0n);
    return sum
}

function solveSyoujin40(inputs:string[]) {
    function isPastaTypeValue(value: number): value is 0 | 1 | 2 {
        const pastaTypeValues = new Set([1,2,3])
        return pastaTypeValues.has(value)
    }

    const MOD = 10000n
    type PastaSchedule = {
        day: number, 
        pastaType: 0 | 1 | 2
    }
    const [N, K] = parseSpaceSeparatedLineToNumberArray(inputs[0])
    const pastaSchduleDict = new Map<number, PastaSchedule>()
    for (let k = 0; k < K+1; k++) {
        const [Ai, Bi] = parseSpaceSeparatedLineToNumberArray(inputs[1+k])
        const pastaTypeValue = Bi - 1
        if (!isPastaTypeValue(pastaTypeValue)){
            throw new Error("Biの値が0 ~ 2以外")
        }
        pastaSchduleDict.set(Ai, {day:Ai, pastaType: pastaTypeValue})
    }

    // dp[n][a][b]
    const dp: bigint[][][] = Array.from({length:N+1},() => Array.from({length:3}, () => Array.from({length:2}, () => 0n)))

    const pastaScheduleOfDay1 = pastaSchduleDict.get(1)
    if (typeof pastaScheduleOfDay1 !== "undefined") {
        dp[1][pastaScheduleOfDay1.pastaType] = [1n, 0n]
        dp[1][(pastaScheduleOfDay1.pastaType + 1) % 3] = [0n, 0n]
        dp[1][(pastaScheduleOfDay1.pastaType + 2) % 3] = [0n, 0n]
    }else{
        dp[1] = Array.from({length:3}, () => [1n, 0n])
    }

    for (let day = 2; day < N+1; day++) {
        for (let pastaType = 0; pastaType < 3; pastaType++) {
            dp[day][pastaType][0] = 

            dp[day][pastaType][1] = dp[day-1][pastaType][0]
            
        }
        
    }

    let ans = 0n

    console.log((ans % MOD).toString())

}

const inputSyoujin40 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin40(inputSyoujin40)
// 参考
// https://zenn.dev/fjnkt98/articles/685c9a991d4e61