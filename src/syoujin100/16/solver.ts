function parseSpaceSeparatedLineToNumberArray(line:string): number[] {
    return line.split(" ").map((char) => {return parseInt(char, 10)})
}

function solveSyoujin16(inputs:string[]) {
    const [N] = parseSpaceSeparatedLineToNumberArray(inputs[0])
    const numberSeqA = parseSpaceSeparatedLineToNumberArray(inputs[1])
    const numberSeqB = parseSpaceSeparatedLineToNumberArray(inputs[2])
    const numberSeqAString = numberSeqA.join("")
    const numberSeqBString = numberSeqB.join("")

    const listOfNumbers = Array.from({length : N}, (_, index) => {return index + 1})
    const allNumberSeqPermutations = generatePermutations(listOfNumbers)
    // 順列の配列を全て文字列にする
    const allNumberSeqStringPermutations = allNumberSeqPermutations.map(
        (numberList) => {return numberList.join("")}
    )
    // 辞書順にソート
    const sortedAllNumberSeqStringPermutations = allNumberSeqStringPermutations.sort()
    // 二つの入力された順列のindexを探す
    let indexOfSeqAInSortedPermutations = -1
    let indexOfSeqBInSortedPermutations = -1

    for (let index = 0; index < sortedAllNumberSeqStringPermutations.length; index++) {
        if (sortedAllNumberSeqStringPermutations[index] == numberSeqAString) {
            indexOfSeqAInSortedPermutations = index
        }
        if (sortedAllNumberSeqStringPermutations[index] == numberSeqBString) {
            indexOfSeqBInSortedPermutations = index
        }
    }

    // その差分を返す
    console.log(Math.abs(indexOfSeqAInSortedPermutations - indexOfSeqBInSortedPermutations))


    function generatePermutations<T>(arr: T[]): T[][] {
        // Base case
        if (arr.length <= 1) return [arr];
        
        return arr.flatMap((element, index) => {
            const remaining = arr.filter((_, i) => i !== index);
            return generatePermutations(remaining).map(perm => [element, ...perm]);
   
        });
    }

}

const inputSyoujin16 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin16(inputSyoujin16)