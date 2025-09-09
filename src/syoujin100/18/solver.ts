function parseSpaceSeparatedLineToNumberArray(line:string): number[] {
    return line.split(" ").map((char) => {return parseInt(char, 10)})
}

function solveSyoujin18(inputs:string[]) {
    const [d] = parseSpaceSeparatedLineToNumberArray(inputs[0])
    const [m] = parseSpaceSeparatedLineToNumberArray(inputs[1])
    const [n] = parseSpaceSeparatedLineToNumberArray(inputs[2])

    const shopPoss: number[] = [] // 本店を含めていない点に注意
    for (let line = 3; line < 3 + (n - 1); line++) {
        const [di] = parseSpaceSeparatedLineToNumberArray(inputs[line])
        shopPoss.push(di)
    }
    const orderGoalPoss: number[] = []
    for (let line = n + 3; line < inputs.length; line++) {
        const [ki] = parseSpaceSeparatedLineToNumberArray(inputs[line])
        orderGoalPoss.push(ki)
    }
    // 末尾と先頭に本店を追加
    shopPoss.unshift(0)
    shopPoss.push(d)

}

const inputSyoujin18 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin18(inputSyoujin18)