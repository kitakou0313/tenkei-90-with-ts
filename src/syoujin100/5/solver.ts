function solveSyoujin100_5(inputs:string[]) {
    const [A,B,C,X,Y] = inputs[0].split(" ").map(
        (char) => {return parseInt(char, 10)}
    )
    
    const trgNumberOfX = Math.max(X, Y)
    const trgNumberOfY = Math.min(X, Y)

    // ABピザの買い方ごとに試す
    let minCost = Infinity

    // Xピザを全てABピザで買う
    minCost = Math.max(
        minCost, trgNumberOfX * C * 2
    )

    // Yピザを全てABピザで買う
    if (X > Y) {
        minCost = Math.max(
            minCost,  * C * 2 + (A - B) * X
        )
    }else{
        minCost = Math.max(
            minCost, 
        )
    }


    // 0ピザを全てABピザで買う
    minCost = Math.max(
        minCost, A * X + B * Y
    )

    console.log(minCost)
}

const inputSyoujin100_5 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin100_5(inputSyoujin100_5)