function parseSpaceSeparatedLineToNumberArray(line:string): number[] {
    return line.split(" ").map((char) => {return parseInt(char, 10)})
}

// 1行に1数字しかない場合にのみ使う
function parseFirstNumber(line: string): number {
    return parseFloat(line);
}

function solveSyoujin22(inputs:string[]) {
    const P = parseFirstNumber(inputs[0])

    // 二分法で計算機をある年数xで使う場合に計算時間が最小値になるx（xでの導関数の値が0になる）を求める
    let left = 0 // 導関数が0未満
    let right = P // 導関数が0以上

    while (Math.abs(right - left) > 10**(-6)) {
        const mid = (left + right) / 2

        if (derivativeOfCalcTimeToCalculationComplete(P, mid) >= 0) {
            right = mid
        }else{
            left = mid
        }
    }
    // 計算機を初年度に使う場合と途中で使う場合の最小値を比較し、小さい方を出力
    console.log(Math.min(calcTimeToCalculationComplete(P, right), P))

    function calcTimeToCalculationComplete(P: number, x:number):number {
        return x + P * (2**(-x/1.5))
    }
    function derivativeOfCalcTimeToCalculationComplete(P: number, x:number) {
        return 1 + P * -2/3 * (2**(-x/1.5)) * Math.log(2)
    }


}

const inputSyoujin22 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin22(inputSyoujin22)