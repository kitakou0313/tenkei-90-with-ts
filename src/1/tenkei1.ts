function isEnableThatAllYokansLengthLognerThanX(Ai: number[], K: number, trgLength: number, L:number): boolean {
    let countOfCuttedYoukan = 0;
    let lengthOfYokanCutted = 0;

    for (let i = 0; i < Ai.length; i++) {
        if(Ai[i] - lengthOfYokanCutted >= trgLength){
            countOfCuttedYoukan += 1
            lengthOfYokanCutted = Ai[i]
        }
    }
    if (L - lengthOfYokanCutted >= trgLength) {
        countOfCuttedYoukan += 1
    }
    
    return countOfCuttedYoukan >= K + 1;
}

function solve(input: string):number {
    const [a, b, c] = input.split('\n')
    const [N, L] = a.split(' ').map(Number);
    const K = Number(b)
    const Ai = c.split(' ').map(Number)

    // 二分探索で最小値の最大化を行う
    let left = 0; // 可能な条件の最大値
    let right = L + 1; // 不可能な条件の最小値
    let mid = right;

    while (right - left > 1) { // これらが隣り合う値になる -> 差が1になるまで探索する
        mid = Math.floor((left + right) / 2)

        if (isEnableThatAllYokansLengthLognerThanX(Ai, K, mid, L)){
            left = mid
        }else{
            right = mid
        }
    }

    return left
}

const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
console.log(solve(input))