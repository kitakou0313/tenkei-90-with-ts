function solve4(inputs:string[]) {
    const [H, W] = inputs[0].split(' ').map((char) => {return parseInt(char, 10)})
    const masu: number[][] = []
    for (let index = 1; index <= H; index++) {
        masu.push(
            inputs[index].split(' ').map((char) => {return parseInt(char, 10)})
        )
    }

    // 各行ごとの合計
    const sumOfRows: number[] = []
    for (const row of masu) {
        sumOfRows.push(row.reduce((acc, element) => {
            return acc + element
        }, 0))
    }

    // 各列ごとの合計
    const sumOfColumn: number[] = []
    for (let rowInd = 0; rowInd < W; rowInd++) {
        let sum = 0
        for (let columnInd = 0; columnInd < H; columnInd++) {
            sum += masu[columnInd][rowInd]
        }
        sumOfColumn.push(sum)
    }

    console.log(sumOfRows)
    console.log(sumOfColumn)
}


const input4 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solve4(input4)