function parseSpaceSeparatedLineToNumberArray(line:string): number[] {
    return line.split(" ").map((char) => {return parseInt(char, 10)})
}

// 1行に1数字しかない場合にのみ使う
function parseFirstNumber(line: string): number {
    return parseInt(line, 10);
}

function convertCoordinateToString(h:number, w:number): string {
    return `${h}-${w}`
}

function markCoordinateAsDomainWithDFS(h:number, w:number) {
    
}

function solveABC450c(inputs:string[]) {
    const [H, W] = parseSpaceSeparatedLineToNumberArray(inputs[0])
    const grid: string[][] = []

    for (let lineNumber = 1; lineNumber < 1+H; lineNumber++) {
        const row = inputs[lineNumber]
        grid.push(row.split(""))
    }

    // DFSで領域を抽出
    const visitted = new Set<string>()
    const domains: Set<string>[] = []

    for (let h = 0; h < H; h++) {
        for (let w = 0; w < W; w++) {
            const coordinateString = convertCoordinateToString(h, w)
            
            if (visitted.has(coordinateString)) {
                continue
            }

            // 白マスだったら領域として探索+記録する
            if (grid[h][w] === '.') {
                markCoordinateAsDomainWithDFS(h, w)
            }
        }
    }

    // 各領域ごと、中にエッジを含まないかを確認
    // エッジを含まなければカウント
    let countOfDomainsNotHavingEdge = 0
    for (const domain of domains) {
        for (const coordinate of domain) {
            
        }
    }

    // エッジを含まない領域の数を出力
    console.log(countOfDomainsNotHavingEdge)

}

const inputABC450c = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveABC450c(inputABC450c)