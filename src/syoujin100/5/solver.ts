function solveSyoujin100_5(inputs:string[]) {
    const [priceOfAPizza, priceOfBPizza, priceOfABPizza, trgNumberOfAPizza, trgNumberOfBPizza] = inputs[0].split(" ").map(
        (char) => {return parseInt(char, 10)}
    )

    // ABピザの買い方ごとに試す
    let minCost = Infinity

    // Xピザを全てABピザで買う
    if (trgNumberOfAPizza > trgNumberOfBPizza) {
        minCost = Math.min(
            minCost,  trgNumberOfAPizza * priceOfABPizza * 2
        )
    }else{
        minCost = Math.min(
            minCost, trgNumberOfBPizza * priceOfABPizza * 2
        )
    }

    // Yピザを全てABピザで買う
    if (trgNumberOfAPizza > trgNumberOfBPizza) {
        minCost = Math.min(
            minCost,  (trgNumberOfAPizza - trgNumberOfBPizza) * priceOfAPizza + trgNumberOfBPizza * priceOfABPizza * 2
        )
    }else{
        minCost = Math.min(
            minCost, (trgNumberOfBPizza - trgNumberOfAPizza) * priceOfBPizza + trgNumberOfAPizza * priceOfABPizza * 2
        )
    }

    // 0ピザを全てABピザで買う
    minCost = Math.min(
        minCost, priceOfAPizza * trgNumberOfAPizza + priceOfBPizza * trgNumberOfBPizza
    )

    console.log(minCost)
}

const inputSyoujin100_5 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin100_5(inputSyoujin100_5)