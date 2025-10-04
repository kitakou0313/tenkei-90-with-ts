function parseSpaceSeparatedLineToNumberArray(line:string): number[] {
    return line.split(" ").map((char) => {return parseInt(char, 10)})
}

// 1行に1数字しかない場合にのみ使う
function parseFirstNumber(line: string): number {
    return parseInt(line, 10);
}

function solveSyoujin25(inputs:string[]) {
    let currentLine = 0
    while (inputs[currentLine] != "0 0") {
        const [W, H] = parseSpaceSeparatedLineToNumberArray(inputs[currentLine])

        const islandsMap: number[][] = []
        for (let lineInMap = currentLine + 1; lineInMap < currentLine + H + 1; lineInMap++) {
            islandsMap.push(parseSpaceSeparatedLineToNumberArray(inputs[lineInMap]))
        }

        // ここでdfsして解答を出力
        console.log(W, H)
        console.log(islandsMap)

        currentLine += H + 1
    }
}

const inputSyoujin25 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin25(inputSyoujin25)