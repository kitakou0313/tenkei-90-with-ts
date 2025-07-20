function isEnableThatAllYokasLengthLognerThanX(): boolean {
    return true
}

function solve(input: string) {
    const [a, b, c] = input.split('\n')
    const [N, L] = a.split(' ').map(Number);
    const K = Number(b)
    const Ai = c.split(' ').map(Number)

    // 二分探索で最小値の最大化を行う
    let left = 0;
    let right = L + 1;

    while (right - left > 1) {
        const mid = Math.floor((left + right) / 2)

        if (isEnableThatAllYokasLengthLognerThanX()){
            left = mid
        }else{
            right = mid
        }
    }
}

const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
solve(input)
