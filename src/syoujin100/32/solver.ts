function parseSpaceSeparatedLineToNumberArray(line:string): number[] {
    return line.split(" ").map((char) => {return parseInt(char, 10)})
}

// 1行に1数字しかない場合にのみ使う
function parseFirstNumber(line: string): number {
    return parseInt(line, 10);
}

function solveSyoujin32(inputs:string[]) {
    function convertPosToKey([h, w]:[number, number]): string {
        return `${h}-${w}`
    }

    let lineNumberOfQuestionInputStart = 0
    let resList: number[] = []
    while (inputs[lineNumberOfQuestionInputStart] !== "0 0") {
        const [W, H] = parseSpaceSeparatedLineToNumberArray(inputs[lineNumberOfQuestionInputStart])

        const mazeMap: string[][] = []
        for (let lineNumber = lineNumberOfQuestionInputStart + 1; lineNumber < lineNumberOfQuestionInputStart + 1 + 2*H - 1; lineNumber++) {
            mazeMap.push(inputs[lineNumber].split(""))
        }

        lineNumberOfQuestionInputStart += 2 * H
        
        // mazeからグラフを構成
        const graph = new Map<string, string[]>()
        const dh: [number, number, number, number] = [ 0, 0, 1,-1]
        const dw: [number, number, number, number] = [ 1,-1, 0, 0]
        for (let squareh = 0; squareh < H; squareh++) {
            for (let squarew = 0; squarew < W; squarew++) {
                const hInMazeMap = squareh * 2
                const wInMazeMap = squarew * 2

                graph.set(convertPosToKey([squareh, squarew]), [])

                for (let dInDhAndDw = 0; dInDhAndDw < 4; dInDhAndDw++) {
                    const nextSquareh = (squareh + dh[dInDhAndDw]) * 2
                    const nextSquarew = (squarew + dw[dInDhAndDw]) * 2

                    const wallh = hInMazeMap + dh[dInDhAndDw]
                    const wallw = wInMazeMap + dw[dInDhAndDw]

                    if (mazeMap[wallh][wallw] === "0") {
                        graph.get(convertPosToKey([squareh, squarew]))?.push(
                            convertPosToKey([nextSquareh, nextSquarew])
                        )
                    }
                    
                }
            }
        }
    }

    for (const res of resList) {
        console.log(res)
    }
}

const inputSyoujin32 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin32(inputSyoujin32)