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
    for (let line = 0; line < inputs.length; line++) {
        const [Hi, Si] = parseSpaceSeparatedLineToNumberArray(
            inputs[line]
        );
        HiList.push(Hi)
        SiList.push(Si)
    }

}

const inputSyoujin21 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin21(inputSyoujin21)