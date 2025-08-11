function solveSyoujin100_6(inputs:string[]) {
    const N = parseInt(inputs[0], 10)
    const S = inputs[1]

    const numberToIndexesMap: Map<string, Set<number>> = new Map()
    for (let index = 0; index <= 9; index++) {
        numberToIndexesMap.set(index.toString(), new Set<number>())   
    }

    // 前処理
    for (let index = 0; index < S.length; index++) {
        numberToIndexesMap.get(S[index])?.add(index)
    }

    for (let trgLuckNumber = 0; trgLuckNumber <= 999; trgLuckNumber++) {
        const trgLuckNumberStr = trgLuckNumber.toString(10).padStart(3, "0")

        
    }

}

const inputSyoujin100_6 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin100_6(inputSyoujin100_6)