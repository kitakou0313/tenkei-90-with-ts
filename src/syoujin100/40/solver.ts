function parseSpaceSeparatedLineToNumberArray(line:string): number[] {
    return line.split(" ").map((char) => {return parseInt(char, 10)})
}

// 1行に1数字しかない場合にのみ使う
function parseFirstNumber(line: string): number {
    return parseInt(line, 10);
}

type Numeric = number | bigint;

function calcSumOfArray<T extends number>(array: T[]): number;
function calcSumOfArray<T extends bigint>(array: T[]): bigint;
function calcSumOfArray<T extends Numeric>(array: T[]): Numeric {
    if (array.length === 0) return 0;
    
    const first = array[0];
    if (typeof first === 'number') {
        return (array as number[]).reduce((acc, cur) => acc + cur, 0);
    }
    return (array as bigint[]).reduce((acc, cur) => acc + cur, 0n);
}

function solveSyoujin40(inputs:string[]) {
    function isPastaTypeValue(value: number): value is 1 | 2 | 3 {
        const pastaTypeValues = new Set([1,2,3])
        return pastaTypeValues.has(value)
    }

    const MOD = 10000n
    type PastaSchedule = {
        day: number, 
        pastaType: 1 | 2 | 3
    }
    const [N, K] = parseSpaceSeparatedLineToNumberArray(inputs[0])
    const pastaSchduleDict = new Map<number, PastaSchedule>()
    for (let k = 0; k < K; k++) {
        const [Ai, Bi] = parseSpaceSeparatedLineToNumberArray(inputs[1+k])
        const pastaTypeValue = Bi
        if (!isPastaTypeValue(pastaTypeValue)){
            throw new Error("Biの値が1 ~ 3以外")
        }
        pastaSchduleDict.set(Ai, {day:Ai, pastaType: pastaTypeValue})
    }

    // dp[n][a][b]
    // N日目にパスタaを食べる時の可能な献立の数（b...0のとき前日と違うパスタ、1の時前日と同じパスタ）
    const dp: bigint[][][] = Array.from({length:N+1},() => Array.from({length:4}, () => Array.from({length:2}, () => 0n)))

    // 献立が決まっている日に初日が含まれるかどうかで分岐
    const pastaScheduleOfDay1 = pastaSchduleDict.get(1)
    if (typeof pastaScheduleOfDay1 !== "undefined") {
        dp[1][pastaScheduleOfDay1.pastaType][0] = 0n
    }else{
        for (let pastaType = 1; pastaType < 4; pastaType++) {
            dp[1][pastaType][0] = 1n
        }
    }

    for (let day = 2; day < N+1; day++) {
        for (let pastaType = 1; pastaType < 4; pastaType++) {
            // 前日と違うパスタを食べるケース
            if (pastaType == 1) {
                dp[day][pastaType][0] = (((dp[day-1][2][0] + dp[day-1][2][1]) % MOD + dp[day-1][3][0]) % MOD + dp[day-1][3][1]) % MOD
            }
            if (pastaType == 2) {
                dp[day][pastaType][0] = (((dp[day-1][1][0] + dp[day-1][1][1]) % MOD + dp[day-1][3][0]) % MOD + dp[day-1][3][1]) % MOD
            }
            if (pastaType == 3) {
                dp[day][pastaType][0] = (((dp[day-1][1][0] + dp[day-1][1][1]) % MOD + dp[day-1][2][0]) % MOD + dp[day-1][2][1]) % MOD
            }

            // 前日と同じパスタを食べるケース
            // 3日連続で選べないので、前日は異なるパスタである必要がある
            dp[day][pastaType][1] += dp[day-1][pastaType][0]
        }

        // 献立が決まっていたケース
        // 決まっていたパスタ以外は全て0にする
        const pastaScheduleOnThisDay = pastaSchduleDict.get(day)
        if (typeof pastaScheduleOnThisDay === "undefined") {
            continue
        }

        for (let pastaType = 1; pastaType < 4; pastaType++) {
            if (pastaType === pastaScheduleOnThisDay.pastaType) {
                continue
            }
            dp[day][pastaType] = [0n, 0n]
        }
    }

    let ans = 0n
    for (let pastaType = 1; pastaType < 4; pastaType++) {
        ans += calcSumOfArray(dp[N][pastaType]) % MOD
        
    }

    console.log((ans % MOD).toString())

}

const inputSyoujin40 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin40(inputSyoujin40)
// 参考
// https://zenn.dev/fjnkt98/articles/685c9a991d4e61