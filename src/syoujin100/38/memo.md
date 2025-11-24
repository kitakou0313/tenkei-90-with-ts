# 問題リンク
- https://judge.u-aizu.ac.jp/onlinejudge/description.jsp?id=ALDS1_10_C&lang=ja

## 考察
- 制約
    - X, Yの長さ <= 10^3
- 要約
    - 文字列X, Yの最長共通部分文字列の長さを求める
- 考察
    - 前提
        - xiをX内の先頭からi番目の文字
        - yiをY内の先頭からi番目の文字
        - Xの長さm
        - Yの長さn
    - 愚直解
        - 方針
            - xiとyiの組み合わせごとに以下を実施
                - i ~ 末尾までの文字列を比較し、一致しているか確認
        - 計算量
            - O(m * n * (mまたはn))でTLE

## メモ

## ToDo
- LCSの定義がわかっていなかった

## 解説