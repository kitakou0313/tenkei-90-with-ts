function parseSpaceSeparatedLineToNumberArray(line:string): number[] {
    return line.split(" ").map((char) => {return parseInt(char, 10)})
}

// 1行に1数字しかない場合にのみ使う
function parseFirstNumber(line: string): number {
    return parseInt(line, 10);
}

function solveSyoujin30(inputs:string[]) {
    const [H, W, N] = parseSpaceSeparatedLineToNumberArray(inputs[0])
    const cityMap : string[][] = []
    for (let lineNumber = 1; lineNumber < inputs.length; lineNumber++) {
        cityMap.push(
            inputs[lineNumber].split("")
        ) 
    }
    for (let h = 0; h < H; h++) {
        for (let w = 0; w < W; w++) {
            const valInGridhw = cityMap[h][w]
            if (valInGridhw === "S") {
                cityMap[h][w] = "0"
            }
        }
    }

    function convertPosToStr(h:number, w:number): string {
        return `${h}-${w}`
    }
    function convertStrToPos(key: string): [number, number] {
        const [h, w] = key.split("-").map((char) => {return parseInt(char, 10)})
        return [h, w]
    }

    const cheeseNumberToFactoryPos = new Map<number, string>()
    for (let h = 0; h < H; h++) {
        for (let w = 0; w < W; w++) {
            const valInGridhw = cityMap[h][w]
            if (valInGridhw in ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]) {
                const cheeseNumber = parseInt(valInGridhw, 10)
                cheeseNumberToFactoryPos.set(
                    cheeseNumber, convertPosToStr(h, w)
                ) 
            }
        }
    }
    let sumOfLeastDistances = 0

    for (let cheeseNumberInGoal = 1; cheeseNumberInGoal < N+1; cheeseNumberInGoal++) {
        const cheeseNumberInStart = cheeseNumberInGoal - 1
        
    }

    console.log(sumOfLeastDistances)

}

const inputSyoujin30 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin30(inputSyoujin30)