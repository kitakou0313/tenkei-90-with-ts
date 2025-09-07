function parseSpaceSeparatedLineToNumberArray(line) {
    return line.split(" ").map(function (char) { return parseInt(char, 10); });
}
function solveSyoujin17(inputs) {
    var N = parseSpaceSeparatedLineToNumberArray(inputs[0])[0];
    var nis = parseSpaceSeparatedLineToNumberArray(inputs[1]);
    var Q = parseSpaceSeparatedLineToNumberArray(inputs[2])[0];
    var qis = parseSpaceSeparatedLineToNumberArray(inputs[3]);
    var countQiExistInNi = 0;
    for (var _i = 0, qis_1 = qis; _i < qis_1.length; _i++) {
        var qi = qis_1[_i];
        countQiExistInNi += searchQiInNisByBinSearch(qi, nis) ? 1 : 0;
    }
    console.log(countQiExistInNi);
    function searchQiInNisByBinSearch(qi, nis) {
        // 二分探索で最小値の最大化を行う
        var left = 0; // qiより小さい
        var right = nis.length; // qiより大きい
        var mid = right;
        while (right - left > 1) { // これらが隣り合う値になる -> 差が1になるまで探索する
            mid = Math.floor((right + left) / 2);
            if (nis[mid] > qi) {
                right = mid;
            }
            else {
                left = mid;
            }
        }
        return (nis[mid] === qi);
    }
}
var inputSyoujin17 = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
solveSyoujin17(inputSyoujin17);
