function solve3(input3: string[]) {
    const N = parseInt(input3[0], 10)
    console.log(input3)
    const paths: number[][] = []
    for (const line of input3.slice(1)) {
        paths.push(
            line.split(' ').map((char) => {return parseInt(char, 10)})
        )
    }
    console.log(paths)
}

const input3 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solve3(input3)