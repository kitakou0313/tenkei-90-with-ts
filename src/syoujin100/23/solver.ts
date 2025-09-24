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

    function search(params:type) {
        let left = 0 // 条件を満たさない
        let right = 1000 // 条件を満たす
        // 上は逆でも可能

        while (right - left > 1) {
            const mid = Math.floor((left + right) / 2)

            if (mid) {
                right = mid
            }else{
                left = mid
            }
        }
    }
}

const inputSyoujin23 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin23(inputSyoujin23)