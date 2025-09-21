function parseSpaceSeparatedLineToNumberArray(line:string): number[] {
    return line.split(" ").map((char) => {return parseInt(char, 10)})
}

// 1行に1数字しかない場合にのみ使う
function parseFirstNumber(line: string): number {
    return parseInt(line, 10);
}

function solveSyoujin21(inputs:string[]) {
    const N = parseFirstNumber(inputs[0])
    const HiList: number[] = []
    const SiList: number[] = []
    for (let line = 1; line < inputs.length; line++) {
        const [Hi, Si] = parseSpaceSeparatedLineToNumberArray(
            inputs[line]
        );
        HiList.push(Hi)
        SiList.push(Si)
    }

    let availableMaxHeight = -1
    for (let i = 0; i < HiList.length; i++) {
        availableMaxHeight = Math.max(availableMaxHeight, HiList[i] + (N-1)*SiList[i])
    }

    let left = 0 // 風船を割り切ることが不可能な高度
    let right = availableMaxHeight // 風船を割ることが可能な高度

    while (right - left > 1) {
        const mid = Math.floor((right + left) / 2)
        if (isPossibleToBreakAllBalloonsBelowHeight(mid, HiList, SiList)) {
            right = mid
        }else{
            left = mid
        }
    }

    console.log(right)

    
    function isPossibleToBreakAllBalloonsBelowHeight(trgHeight: number, HiList: number[], SiList: number[]): boolean {
        const timelimits: number[] = []

        for (let i = 0; i < HiList.length; i++) {
            const timelimitOfBalooni = Math.floor((trgHeight - HiList[i]) / SiList[i])  
            if (timelimitOfBalooni < 0) {
                return false
            }         
            timelimits.push(timelimitOfBalooni)
        }

        timelimits.sort((a, b) => a - b)

        for (let i = 0; i < HiList.length; i++) {
            if (timelimits[i] < i) {
                return false
            }            
        }
        return true

    }

}

const inputSyoujin21 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin21(inputSyoujin21)