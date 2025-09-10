function parseSpaceSeparatedLineToNumberArray(line:string): number[] {
    return line.split(" ").map((char) => {return parseInt(char, 10)})
}

function solveSyoujin18(inputs:string[]) {
    const [d] = parseSpaceSeparatedLineToNumberArray(inputs[0])
    const [m] = parseSpaceSeparatedLineToNumberArray(inputs[1])
    const [n] = parseSpaceSeparatedLineToNumberArray(inputs[2])

    const shopPositions: number[] = [] // 本店を含めていない点に注意
    for (let line = 3; line < 3 + (n - 1); line++) {
        const [di] = parseSpaceSeparatedLineToNumberArray(inputs[line])
        shopPositions.push(di)
    }
    const orderGoalPositions: number[] = []
    for (let line = n + 3; line < inputs.length; line++) {
        const [ki] = parseSpaceSeparatedLineToNumberArray(inputs[line])
        orderGoalPositions.push(ki)
    }
    // 末尾と先頭に本店を追加
    shopPositions.push(0, d)
    // お店を距離順にソート
    shopPositions.sort()

    let sumOfDistanceFromNearestShopAndOrderGoal = 0
    for (const orderGoalPos of orderGoalPositions) {
        
    }

    console.log(sumOfDistanceFromNearestShopAndOrderGoal)

    
    // 0 ~ 宅配先までで最も近いお店 と 宅配先 ~ 本店（末尾）までで最も近いお店を探索する
    // その後それらのお店のうち近い方を発送元とする
    function calcLeastDistanceBetweenShopAndShop(orderGoalPos: number, shopPositions:number[]): number {
        // 配送先より小さい距離のお店を指す
        let left = 0
        // 配送先より大きい距離のお店をさす
        let right = shopPositions.length - 1

        while ((right - left) > 1) {
            
        }


    }

}

const inputSyoujin18 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin18(inputSyoujin18)