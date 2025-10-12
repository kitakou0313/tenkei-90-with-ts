function parseSpaceSeparatedLineToNumberArray(line:string): number[] {
    return line.split(" ").map((char) => {return parseInt(char, 10)})
}

// 1行に1数字しかない場合にのみ使う
function parseFirstNumber(line: string): number {
    return parseInt(line, 10);
}

function solveSyoujin27(inputs:string[]) {
    const M = parseFirstNumber(inputs[0])
    const N = parseFirstNumber(inputs[1])
    const matrix: number[][] = []

    for (let lineNumber = 2; lineNumber < inputs.length; lineNumber++) {
        matrix.push(
            parseSpaceSeparatedLineToNumberArray(inputs[lineNumber])
        )        
    }
    
    let maxSizeOfIces = -1
    function convertPosToSetKey(m: number, n:number): string {
        return `${n}-${m}`
    }
    function dfs(current_m: number, current_n: number, matrix: number[][], visitedPoses: Set<string>) {
        visitedPoses.add(convertPosToSetKey(current_m, current_n))
        maxSizeOfIces = Math.max(maxSizeOfIces, visitedPoses.size)

        const dm = [0,0,1,-1]
        const dn = [1,-1,0,0]
        for (let indexInDmAndDn = 0; indexInDmAndDn < dm.length; indexInDmAndDn++) {
            const next_m = current_m + dm[indexInDmAndDn]
            const next_n = current_n + dn[indexInDmAndDn]

            if (next_m < 0 || M-1 < next_m || next_n < 0 || N-1 < next_n) {
                continue
            }
            if (visitedPoses.has(convertPosToSetKey(next_m, next_n)) || matrix[next_n][next_m] != 1) {
                continue
            }

            dfs(next_m, next_n, matrix, visitedPoses)
            
        }

        visitedPoses.delete(convertPosToSetKey(current_m, current_n))
    }
    const visitedPoses = new Set<string>()
    for (let start_m = 0; start_m < M; start_m++) {
        for (let start_n = 0; start_n < N; start_n++) {
            if (matrix[start_n][start_m] != 1) {
                continue
            }
            dfs(start_m, start_n, matrix, visitedPoses)
        }
    }

    console.log(maxSizeOfIces)
}

const inputSyoujin27 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin27(inputSyoujin27)