function generateSortedValidParentheseStrList_fixed(N: number): string[] {
    function validateIfValidParentheseStr(parentheStr: string): boolean {
        let parentheseCount = 0

        for (const parentheChar of parentheStr) {
            if (parentheChar == "(") {
                parentheseCount += 1
            }else {
                parentheseCount -= 1
            }

            if (parentheseCount < 0) {
                return false
            }
        }

        return parentheseCount == 0

    }
    function genParenthesStrBasedOnBitStr(bitStr:number, N: number): string {
        let genStr = ""
        for (let shiftCount = 0; shiftCount < N; shiftCount++) {
            if ((bitStr >> shiftCount) & 1){
                genStr = ")" + genStr
            }else{
                genStr = "(" + genStr
            }
        }
        return genStr
    }

    const sortedValidParetheseStrList: string[] = []
    for (let bitStr = 0; bitStr < Math.pow(2, N); bitStr++) {
        const parentheStrCandidate = genParenthesStrBasedOnBitStr(bitStr, N)
        if (validateIfValidParentheseStr(parentheStrCandidate)) {
            sortedValidParetheseStrList.push(parentheStrCandidate)
        }
    }
    
    return sortedValidParetheseStrList
}

function solve2_fixed(input: string[]) {
    const N = Number(input[0])

    if ( N % 2 != 0) {
        return
    }
    const validParetheseStrList = generateSortedValidParentheseStrList_fixed(N)
    
    for (const paretheseStr of validParetheseStrList) {
        console.log(paretheseStr)
    }
    return
}
const input2_fixed = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solve2_fixed(input2_fixed)