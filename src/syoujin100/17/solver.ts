function parseSpaceSeparatedLineToNumberArray(line:string): number[] {
    return line.split(" ").map((char) => {return parseInt(char, 10)})
}

function solveSyoujin17(inputs:string[]) {
    const [N] = parseSpaceSeparatedLineToNumberArray(inputs[0])
    const nis = parseSpaceSeparatedLineToNumberArray(inputs[1])
    const [Q] = parseSpaceSeparatedLineToNumberArray(inputs[2])
    const qis = parseSpaceSeparatedLineToNumberArray(inputs[3])

    let countQiExistInNi = 0

    for (const qi of qis) {
        countQiExistInNi += searchQiInNisByBinSearch(qi, nis) ? 1 : 0
    }

    console.log(countQiExistInNi)

    function searchQiInNisByBinSearch(qi:number, nis:number[]): boolean {
        // 二分探索で最小値の最大化を行う
        let left = 0; // qiより小さい
        let right = nis.length; // qiより大きい
        let mid = right;

        while (right - left > 1) { // これらが隣り合う値になる -> 差が1になるまで探索する
            mid = Math.floor((right + left) / 2)

            if (nis[mid] > qi) {
                right = mid
            } else {
                left = mid
            }
        }

        return (nis[mid] === qi)
    }
}

const inputSyoujin17 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin17(inputSyoujin17)