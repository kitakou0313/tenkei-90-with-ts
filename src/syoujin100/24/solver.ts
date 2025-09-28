function parseSpaceSeparatedLineToNumberArray(line:string): number[] {
    return line.split(" ").map((char) => {return parseInt(char, 10)})
}

// 1行に1数字しかない場合にのみ使う
function parseFirstNumber(line: string): number {
    return parseInt(line, 10);
}

function solveSyoujin24(inputs:string[]) {
    const N = parseFirstNumber(inputs[0])
    const graph: number[][] = []
    for (let line = 1; line < inputs.length; line++) {
        const element = inputs[line];
        const parsedLine = parseSpaceSeparatedLineToNumberArray(inputs[line])
        graph.push(parsedLine.splice(2))
    }
    console.log(graph)
}

const inputSyoujin24 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin24(inputSyoujin24)