function generateSortedValidParentheseStrList(numOfParenthesePair: number): string[] {
    if (numOfParenthesePair == 1) {
        return ["()"]
    }
    
    const sortedValidParentheseStrListN_1 = generateSortedValidParentheseStrList(numOfParenthesePair - 1)
    const res: string[] = []
    for (const validParethese of sortedValidParentheseStrListN_1) {
        res.push("(" + validParethese + ")")
    }
    for (const validParethese of sortedValidParentheseStrListN_1) {
        res.push("()" + validParethese)
    }

    return res
}

function solve2(input: string[]) {
    const N = Number(input[0])

    if ( N % 2 != 0) {
        return
    }
    const numOfParenthesePair = N / 2
    const validParetheseStrList = generateSortedValidParentheseStrList(numOfParenthesePair)
    
    for (const paretheseStr of validParetheseStrList) {
        console.log(paretheseStr)
    }
    return
}
const input2 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solve2(input2)