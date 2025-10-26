function parseSpaceSeparatedLineToNumberArray(line:string): number[] {
    return line.split(" ").map((char) => {return parseInt(char, 10)})
}

// 1行に1数字しかない場合にのみ使う
function parseFirstNumber(line: string): number {
    return parseInt(line, 10);
}

function solveSyoujin31(inputs:string[]) {
    function convertPosToStr(h:number, w:number): string {
        return `${h}-${w}`
    }
    function convertStrToPos(key: string): [number, number] {
        const [h, w] = key.split("-").map((char) => {return parseInt(char, 10)})
        return [h, w]
    }

    const [W, H] = parseSpaceSeparatedLineToNumberArray(inputs[0])
    const rawGrids: string[][] = []
    for (let lineNumber = 1; lineNumber < inputs.length; lineNumber++) {
        rawGrids.push(
            inputs[lineNumber].split(" ")
        )
    }
    const grids: ("0" | "1")[][] = Array.from({length : H + 2}, () => Array.from({length: W + 2}, () => "0"))
    
    for (let h = 0; h < H; h++) {
        for (let w = 0; w < W; w++) {
            grids[h+1][w+1] = rawGrids[h][w] as ("0" | "1")
        }
    }

    const dw = {
        0: [ 0, 1, 1, 1, 0,-1],
        1: [-1, 0, 1, 0,-1,-1]
    }
    
    const dh = {
        0: [-1,-1, 0, 1, 1, 0],
        1: [-1,-1, 0, 1, 1, 0]
    }

    // 建物に囲まれているグリッドはすべて黒扱いとする
    // 最初にすべて1(黒)とする
    const gridsAfterMakingBuildings: ("0" | "1")[][] = Array.from({length: H + 2}, () => {
        return Array.from({length: W + 2}, () => "1")
    })

    const visited = new Set<string>()
    function bfs(h:number, w: number) {
        if (visited.has(convertPosToStr(h, w))) {
            return
        }
        if (grids[h][w] === "1") {
            return
        }
        gridsAfterMakingBuildings[h][w] = "0"
        visited.add(convertPosToStr(h, w))

        for (let indexInd = 0; indexInd < 6; indexInd++) {
            const nh = h + dh[indexInd]
            const nw = w + dw[indexInd]

            if (nh < 0 || H + 1 < nh ||
                nw < 0 || W + 1 < nw ||
                grids[nh][nw] === "1") {
                continue
            }
            if (visited.has(convertPosToStr(h, w))) {
                continue
            }
        }
    }
    
    for (let h = 0; h < H + 2; h++) {
        for (let w = 0; w < W + 2; w++) {
            bfs(h, w)
        }
    }

    // 建物マスと隣接する空き地マスの数を数える
    let countOfWalls = 0
    for (let h = 0; h < H + 2; h++) {
        for (let w = 0; w < W + 2; w++) {
            if (gridsAfterMakingBuildings[h][w] === "0") {
                continue
            }

            for (let indexInd = 0; indexInd < 6; indexInd++) {
                const nh = h + dh[indexInd]
                const nw = w + dw[indexInd]
                if (gridsAfterMakingBuildings[nh][nw] === "0") {
                    countOfWalls += 1
                }
                
            }
        }
        
    }

    console.log(countOfWalls)
}

const inputSyoujin31 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin31(inputSyoujin31)