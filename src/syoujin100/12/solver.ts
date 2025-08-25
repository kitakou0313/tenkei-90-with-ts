function solveSyoujin100_12(inputs:string[]) {
    const [N, M] = inputs[0].split(" ").map((char) => {return parseInt(char, 10)})
    const relationships: boolean[][] = Array.from({ length: N }, () => 
        Array.from({ length: N }, () => false)
    );
    for (let lineNumber = 1; lineNumber < inputs.length; lineNumber++) {
        const [x, y] = inputs[lineNumber].split(" ").map((char) => {return parseInt(char, 10)})
        relationships[x-1][y-1] = true
        relationships[y-1][x-1] = true
    }

    let maxFuctionSetSize = 0
    for (let bitNumber = 0; bitNumber < Math.pow(2, N); bitNumber++) {
        const fuctionSet = convertBitNumberToFuction(bitNumber, N)
        if(isFuctionValid(fuctionSet, relationships)){
            maxFuctionSetSize = Math.max(maxFuctionSetSize, fuctionSet.size)
        }

    }
    console.log(maxFuctionSetSize)

    function convertBitNumberToFuction(bitNumber:number, N:number):Set<number> {
        const fuctionSet = new Set<number>()
        for (let shiftNumber = 0; shiftNumber < N; shiftNumber++) {
            if (((bitNumber >> shiftNumber) & 1) == 1) {
                fuctionSet.add(shiftNumber)
            }
        }
        return fuctionSet
    }

    function isFuctionValid(fuctionSet: Set<number>, relationships:boolean[][]):boolean {
        for (const giinA of fuctionSet) {
            for (const giinB of fuctionSet) {
                if (giinA == giinB) {
                    continue
                }
                if(!relationships[giinA][giinB]){
                    return false
                }
            }
        }

        return true
    }
}

const inputSyoujin100_12 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin100_12(inputSyoujin100_12)