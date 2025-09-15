function parseSpaceSeparatedLineToNumberArray(line:string): number[] {
    return line.split(" ").map((char) => {return parseInt(char, 10)})
}

// 1行に1数字しかない場合にのみ使う
function parseFirstNumber(line: string): number {
    return parseInt(line, 10);
}

function solveSyoujin20(inputs:string[]) {
    const N = parseFirstNumber(inputs[0])
    const AiList = parseSpaceSeparatedLineToNumberArray(
        inputs[1]
    )
    const BiList = parseSpaceSeparatedLineToNumberArray(
        inputs[2]
    )
    const CiList = parseSpaceSeparatedLineToNumberArray(
        inputs[3]
    )
    
    const sortedAiList = AiList.sort((a, b) =>  a - b )
    const sortedBiList = BiList.sort((a, b) =>  a - b )
    const sortedCiList = CiList.sort((a, b) =>  a - b )

    const indexInSortedBiToCountOfBiggerElementInCi: number[] = Array.from({length : N}, () => 0)
    for (let index = 0; index < sortedBiList.length; index++) {
        const indexInSortedCiOfFirstBiggerElement = searchIndexOfFirstBiggerElementByBinSearch(
            sortedBiList[index], sortedCiList
        )
        indexInSortedBiToCountOfBiggerElementInCi[index] = N - indexInSortedCiOfFirstBiggerElement
    }
    const indexInSortedBiToAlterCount: number[] = Array.from({length : N}, () => 0)
    indexInSortedBiToAlterCount[N - 1] = indexInSortedBiToCountOfBiggerElementInCi[N - 1]
    for (let index = N - 2; index > -1; index--) {
        indexInSortedBiToAlterCount[index] = indexInSortedBiToAlterCount[index + 1] + indexInSortedBiToCountOfBiggerElementInCi[index]
    }

    let countOfPossibleAlter = 0
    for (let index = 0; index < N; index++) {
        const ai = sortedAiList[index]
        const indexInSortedBiOfFirstBiggerElement = searchIndexOfFirstBiggerElementByBinSearch(
            ai, sortedBiList
        )
        if (indexInSortedBiOfFirstBiggerElement == N) {
            continue
        }
        countOfPossibleAlter += indexInSortedBiToAlterCount[indexInSortedBiOfFirstBiggerElement]
    }
    console.log(countOfPossibleAlter)


    // ソート済み配列の中でtrgNumber引数に与えた値よりも大きい値のindexを返す 見つからなければsortedArray.lengthを返す
    function searchIndexOfFirstBiggerElementByBinSearch(trgNumber: number, sortedArray: number[]): number {
        let left = -1 // trgNumber以下
        let right = sortedArray.length // trgNumberより大きい

        while (right - left > 1) {
            const middle = Math.floor((left + right) / 2)
            if (sortedArray[middle] <= trgNumber) {
                left = middle
            } else {
                right = middle
            }
        }

        return right
    }

}

const inputSyoujin20 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin20(inputSyoujin20)