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
    const sorttedSiList = Array.from(SiList).sort((a, b) =>  a - b)

    // A, BをSiの要素とする
    // 各Aについて、M - B以下の最大値を探索する（2分探索）
    // その最大値が解答
    
}

const inputSyoujin23 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin23(inputSyoujin23)