function parseSpaceSeparatedLineToNumberArray(line:string): number[] {
    return line.split(" ").map((char) => {return parseInt(char, 10)})
}

// 1行に1数字しかない場合にのみ使う
function parseFirstNumber(line: string): number {
    return parseInt(line, 10);
}

function solveSyoujin40(inputs:string[]) {
    const MOD = 10000n
    type PastaSchedule = {
        day: number, 
        pastaType: 1 | 2 | 3
    }
    const [N, K] = parseSpaceSeparatedLineToNumberArray(inputs[0])
    const pastaSchduleList: PastaSchedule[] = []
    for (let k = 0; k < K+1; k++) {
        const [Ai, Bi] = parseSpaceSeparatedLineToNumberArray(inputs[1+k])
        pastaSchduleList.push({
            day:Ai,
            pastaType: Bi as 1 | 2 | 3
        })
    }

    const dp: bigint[][] = Array.from({length:N+1},() => Array.from({length:3}, () => 0n))

    let ans = 0n


    console.log((ans % MOD).toString())

}

const inputSyoujin40 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin40(inputSyoujin40)