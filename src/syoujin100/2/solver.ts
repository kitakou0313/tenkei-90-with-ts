function solveSyoujin100_2(inputs:string[]) {
    const N = parseInt(inputs[0], 10)

    var countOfOddNumbersHaving8Divisors = 0
    for (let n = 1; n <= N; n++) {
        if(n % 2 == 0) {
            continue
        }
        countOfOddNumbersHaving8Divisors += isHaving8Divisors(n) ? 1 : 0 
    }

    console.log(countOfOddNumbersHaving8Divisors)
    
    function isHaving8Divisors(n: number): boolean {
        var countOfDivisors = 0
        for(let candidateOfDivisor = 1; candidateOfDivisor <= n; candidateOfDivisor++){
            countOfDivisors += n % candidateOfDivisor == 0 ? 1 : 0
        }
        return countOfDivisors == 8
    }
}

const inputSyoujin100_2 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin100_2(inputSyoujin100_2)