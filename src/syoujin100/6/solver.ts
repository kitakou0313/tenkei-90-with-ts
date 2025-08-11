function solveSyoujin100_6(inputs:string[]) {
    const N = parseInt(inputs[0], 10)
    const S = inputs[1]

    const allSelectionOfDigitCombinationsNumber = N * (N - 1) * (N - 2) / 6

    let duplicateSelectioncount = 0

    for (let trgLuckNumber = 0; trgLuckNumber <= 999; trgLuckNumber++) {
        const trgLuckNumberStr = trgLuckNumber.toString(10).padStart(3, "0")

        const resOfCountSelectionOfDigitCreatingTrgLucyNumber = countSelectionOfDigitCreatingTrgLucyNumber(trgLuckNumberStr)

        duplicateSelectioncount += resOfCountSelectionOfDigitCreatingTrgLucyNumber == 0 ? 0 : (resOfCountSelectionOfDigitCreatingTrgLucyNumber - 1) 
        
    }

    console.log(allSelectionOfDigitCombinationsNumber - duplicateSelectioncount)

    function countSelectionOfDigitCreatingTrgLucyNumber(trgLuckNumberStr:string): number {
        
    }

}

const inputSyoujin100_6 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin100_6(inputSyoujin100_6)