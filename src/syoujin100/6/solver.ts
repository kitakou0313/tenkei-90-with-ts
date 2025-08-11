function solveSyoujin100_6(inputs:string[]) {
    const N = parseInt(inputs[0], 10)
    const S = inputs[1]

    // const numberToIndexesMap: Map<string, Set<number>> = new Map()
    // for (let index = 0; index <= 9; index++) {
    //     numberToIndexesMap.set(index.toString(), new Set<number>())   
    // }

    // // 前処理
    // for (let index = 0; index < S.length; index++) {
    //     numberToIndexesMap.get(S[index])?.add(index)
    // }

    let res = 0
    for (let trgLuckNumber = 0; trgLuckNumber <= 999; trgLuckNumber++) {
        const trgLuckNumberStr = trgLuckNumber.toString(10).padStart(3, "0")

        let indexOfUndiscoveredCharInTrgLuchyNumberStr = 0
        for (const char of S) {
            if (trgLuckNumberStr[indexOfUndiscoveredCharInTrgLuchyNumberStr] == char) {
                indexOfUndiscoveredCharInTrgLuchyNumberStr += 1
            }
        }

        if (indexOfUndiscoveredCharInTrgLuchyNumberStr === 3) {
            res += 1
        }
    }

    console.log(res)

}

const inputSyoujin100_6 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin100_6(inputSyoujin100_6)