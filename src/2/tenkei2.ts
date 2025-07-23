function generateSortedValidParentheseStrList(numOfParenthesePair: number): string[] {
    if (numOfParenthesePair == 1) {
        return ["()"]
    }
    
    const sortedValidParentheseStrListN_1 = generateSortedValidParentheseStrList(numOfParenthesePair - 1)
    const res: string[] = []
    const addedParentheseStrSet: Set<string> = new Set([])
    for (const validParethese of sortedValidParentheseStrListN_1) {
        const validParetheseCandidate = "(" + validParethese + ")"
        if (addedParentheseStrSet.has(validParetheseCandidate)) {
            continue
        }
        res.push("(" + validParethese + ")")
        addedParentheseStrSet.add(validParetheseCandidate)
    }
    for (const validParethese of sortedValidParentheseStrListN_1) {
        const validParetheseCandidate = "()" + validParethese 
        if (addedParentheseStrSet.has(validParetheseCandidate)) {
            continue
        }
        res.push("()" + validParethese)
        addedParentheseStrSet.add(validParetheseCandidate)
    }
    for (const validParethese of sortedValidParentheseStrListN_1) {
        const validParetheseCandidate = validParethese + "()"
        if (addedParentheseStrSet.has(validParetheseCandidate)) {
            continue
        }
        res.push(validParethese + "()")
        addedParentheseStrSet.add(validParetheseCandidate)
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
    const sortedValidParetheseStrList = validParetheseStrList.sort()
    
    for (const paretheseStr of sortedValidParetheseStrList) {
        console.log(paretheseStr)
    }
    return
}
const input2 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solve2(input2)