function parseSpaceSeparatedLineToNumberArray(line:string): number[] {
    return line.split(" ").map((char) => {return parseInt(char, 10)})
}

// 1行に1数字しかない場合にのみ使う
function parseFirstNumber(line: string): number {
    return parseInt(line, 10);
}

function solveSyoujin25(inputs:string[]) {
    let currentLine = 0
    const listOfCountsOfIslands: number[] = []
    while (inputs[currentLine] != "0 0") {
        const [W, H] = parseSpaceSeparatedLineToNumberArray(inputs[currentLine])

        const islandsMap: number[][] = []
        for (let lineInMap = currentLine + 1; lineInMap < currentLine + 1 + H; lineInMap++) {
            islandsMap.push(parseSpaceSeparatedLineToNumberArray(inputs[lineInMap]))
        }

        // ここでdfs
        const isMeshIsMarkedAsIslands = new Set<string>()
        let countOfIslands = 0
        for (let h = 0; h < H; h++) {
            for (let w = 0; w < W; w++) {
                if (islandsMap[h][w] !== 1 || isMeshIsMarkedAsIslands.has(convertPosToSetKey(h, w))) {
                    continue
                }
                // markする
                markMeshesInIslands(islandsMap, isMeshIsMarkedAsIslands, [h, w])
                countOfIslands += 1
            }
           
        }
        listOfCountsOfIslands.push(countOfIslands)

        currentLine += H + 1
    }

    for (const countOfIslands of listOfCountsOfIslands) {
        console.log(countOfIslands)
    }

    function markMeshesInIslands(islandsMap: number[][], isMeshIsMarkedAsIslands: Set<string>, startMeshPos: [number, number]) {
        const [startMeshh, startMeshw] = startMeshPos
        isMeshIsMarkedAsIslands.add(convertPosToSetKey(startMeshh, startMeshw))

        const d = [0, 1, -1]
        for (const dh of d) {
            for (const dw of d) {
                const [nexth, nextw] = [startMeshh + dh, startMeshw + dw]
                if (nexth < 0 || nexth > islandsMap.length-1 ||
                    nextw < 0 || nextw > islandsMap[0].length-1
                ) {
                    continue
                }
                if (islandsMap[nexth][nextw] !== 1 || isMeshIsMarkedAsIslands.has(convertPosToSetKey(nexth, nextw))) {
                    continue
                }
                markMeshesInIslands(islandsMap, isMeshIsMarkedAsIslands, [nexth, nextw])
            }
        }
    }

    function convertPosToSetKey(h: number, w:number): string {
        return `${h}-${w}`
    }
}

const inputSyoujin25 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin25(inputSyoujin25)