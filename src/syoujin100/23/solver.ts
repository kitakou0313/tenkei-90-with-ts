function parseSpaceSeparatedLineToNumberArray(line:string): number[] {
    return line.split(" ").map((char) => {return parseInt(char, 10)})
}

// 1行に1数字しかない場合にのみ使う
function parseFirstNumber(line: string): number {
    return parseInt(line, 10);
}

function solveSyoujin23(inputs:string[]) {
    const [N, M] = parseSpaceSeparatedLineToNumberArray(inputs[0])
    const PiList: number[] = []
    for (let line = 1; line < inputs.length; line++) {
        PiList.push(parseFirstNumber(inputs[line]))
    }

    // 二つ選んだ時の合計を列挙する
    const SiList: Set<number> = new Set()
    for (const Pi1 of PiList) {
        for (const Pi2 of PiList) {
            SiList.add(Pi1 + Pi2)
        }
    }
    SiList.add(0)
    const sortedSiList = Array.from(SiList).sort((a, b) =>  a - b)

    // A, BをSiの要素とする
    // 各Aについて、M - A以下となるBiの最大値を探索する（2分探索）
    // その最大値が解答
    let biggestNumberInSiThroughAllAi = Number.NEGATIVE_INFINITY
    for (const Ai of SiList) {
        const searchResultWithAi = searchBiggestNumberlessThenThreshold(sortedSiList, M - Ai)

        switch (typeof searchResultWithAi) {
            case "number":
                biggestNumberInSiThroughAllAi = Math.max(searchResultWithAi, biggestNumberInSiThroughAllAi)
                break;
            case "undefined":
                biggestNumberInSiThroughAllAi = Math.max(0, biggestNumberInSiThroughAllAi)
        }
        
    }
    console.log(biggestNumberInSiThroughAllAi)

    function searchBiggestNumberlessThenThreshold(sortedNumberList: number[], threshold: number): number | undefined {
        let left = -1 // threshold以下の値
        let right = sortedNumberList.length // thresholdより大きい値

        while(right - left > 1){
            const mid = Math.floor((left + right) / 2)
            if (sortedNumberList[mid] <= threshold) {
                left = mid
            } else {
                right = mid
            }
        }

        // left = -1の時
        // sortedNumberListにはthresholdより大きい値しかない
        // 適当なあり得ない値を返す


        // left = sortedNumberList.length - 1の時
        // sortedNumberListにはthreshold以下の値しかない
        // leftのindexの値が最大値なのでそのまま返して良い
        return sortedNumberList[left]
    }
    
}

const inputSyoujin23 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin23(inputSyoujin23)