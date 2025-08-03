function solveSyoujin100_3(inputs:string[]) {
    const S = inputs[0]

    // 0で初期化（空文字列は必ず条件を満たす文字列）
    var maxACGTSubstringLength = 0
    for (let start = 0; start < S.length; start++) {
        var subString = ""
        for (let end = start; end < S.length; end++) {
            subString += S[end]

            if (isValidACGTString(subString)) {
                maxACGTSubstringLength = Math.max(subString.length, maxACGTSubstringLength)
            }
        }
    }

    console.log(maxACGTSubstringLength)

    function isValidACGTString(str: string):boolean {
        const charsInACGTString = ["A", "C", "G", "T"]
        for (let index = 0; index < str.length; index++) {
            if (!(charsInACGTString.includes(str[index]))) {
                return false
            }
        }

        return true
    }
}

const inputSyoujin100_3 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin100_3(inputSyoujin100_3)