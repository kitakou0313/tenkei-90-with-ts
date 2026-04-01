function parseSpaceSeparatedLineToNumberArray(line:string): number[] {
    return line.split(" ").map((char) => {return parseInt(char, 10)})
}

// 1行に1数字しかない場合にのみ使う
function parseFirstNumber(line: string): number {
    return parseInt(line, 10);
}

// CoorinateSet
// 座標の有無を文字列への変換で判定できるクラス

function convertCoordinateToString(h:number, w:number): string {
    return `${h}-${w}`
}

function convertStringToCoodinate(coordinateString:string): [number, number] {
    const [hString, wString] = coordinateString.split("-")
    return [parseInt(hString, 10), parseInt(wString, 10)]
}

// 呼び出されたマスをdomainに含める
function markCoordinateAsDomainWithDFS(h:number, w:number, H:number, W:number, domain:Set<string>, visitted:Set<string>, grid: string[][]) {
    visitted.add(convertCoordinateToString(h, w))
    domain.add(convertCoordinateToString(h, w))

    // 0 ~ H, 0 ~ W以内 かつ 白マス　かつ visittedにないとき遷移   
    const dhList = [ 0, 0, 1,-1]
    const dwList = [ 1,-1, 0, 0]

    for (let dIndex = 0; dIndex < 4; dIndex++) {
        const nexth = h+dhList[dIndex]
        const nextw = w+dwList[dIndex]

        if (!(0 <= nexth && nexth <= H-1 && 0 <= nextw && nextw <= W-1)) {
            continue
        }
        if (!(grid[nexth][nextw] === ".")) {
            continue
        }
        if ((visitted.has(convertCoordinateToString(nexth, nextw)))) {
            continue
        }

        markCoordinateAsDomainWithDFS(nexth, nextw, H, W, domain, visitted, grid)
    }

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
                const domain = new Set<string>()
                markCoordinateAsDomainWithDFS(h, w, H, W, domain, visitted, grid)
                domains.push(domain)
            }
        }
    }

    // 各領域ごと、中にエッジを含まないかを確認
    // エッジを含まなければカウント
    let countOfDomainsNotHavingEdge = 0
    for (const domain of domains) {
        let isThisDomainNotHavingEdge = true
        for (const coordinate of domain) {
            const [h, w] = convertStringToCoodinate(coordinate)
            if (h == 0 || h == H-1 || w == 0 || w == W-1) {
                isThisDomainNotHavingEdge = false
            }
        }

        countOfDomainsNotHavingEdge += isThisDomainNotHavingEdge ? 1 : 0

    }

    // エッジを含まない領域の数を出力
    console.log(countOfDomainsNotHavingEdge)

}

const inputABC450c = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveABC450c(inputABC450c)