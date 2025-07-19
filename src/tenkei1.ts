function solve(input: string) {
    const [a, b, c] = input.split('\n')
    const [N, L] = a.split(' ').map(Number);
    const K = Number(b)
    const Ai = c.split(' ').map(Number)


    console.log(N, L, K, Ai)
}

const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
solve(input)
