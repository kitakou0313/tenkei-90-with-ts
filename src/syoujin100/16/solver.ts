function parseToNumbers(line: string): number[] {
    return line.split(" ").map(char => parseInt(char, 10));
}

function solveSyoujin16(inputs: string[]) {
    const [N] = parseToNumbers(inputs[0]);
    const seqA = parseToNumbers(inputs[1]).join("");
    const seqB = parseToNumbers(inputs[2]).join("");

    const permutations = generatePermutations(Array.from({length: N}, (_, i) => i + 1))
        .map(arr => arr.join(""))
        .sort();

    const indexA = permutations.findIndex(p => p === seqA);
    const indexB = permutations.findIndex(p => p === seqB);

    console.log(Math.abs(indexA - indexB));

    function generatePermutations<T>(arr: T[]): T[][] {
        if (arr.length <= 1) return [arr];
        
        return arr.flatMap((element, index) => {
            const remaining = arr.filter((_, i) => i !== index);
            return generatePermutations(remaining).map(perm => [element, ...perm]);
        });
    }
}

const inputSyoujin16 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin16(inputSyoujin16);