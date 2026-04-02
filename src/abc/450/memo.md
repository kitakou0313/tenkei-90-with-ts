# 問題リンク
- https://atcoder.jp/contests/abc450/tasks/abc450_a

## 考察

### C
- 制約
    - 3 <= H, W <= 10^3
- 要約
- 考察
    - DFSして領域を抽出 -> その領域にエッジが含まれていないか確認
    - エッジかどうかの判定
    - H=4, W=3
        - 横のエッジ -> hが0 or H-1
        - 盾のエッジ -> wが0 or W-1
(h, w)
(3,0)(3,1)(3,2)
(2,0)(2,1)(2,2)
(1,0)(1,1)(1,2)
(0,0)(0,1)(0,2)

## メモ
- TLEしたのでパフォチューする
    - CPU Profilingを取得 -> 改善
- Node.jsアプリケーションのCPU Profileの取り方
    - `node --cpu-prof solver.js`
    - `chrome://inspect` -> `Open dedicated DevTools for Node` 
    - `Performance`タブ -> 上矢印のボタンから読み込み
- もっとサイズの大きい入力にしないと正確なProfilingができなさそう
- Flame graphの表示が他の言語と違う？
    - 他のProfilerの表示
        - 横軸->サンプル数
    - Dev toolのProfiler
        - 横軸->実行タイムライン

## ToDo
- 文字列に変換してSetにする実装よりmapとSetで扱う方が早かった　なぜ？
    - 文字列変換の方
        - src/abc/450/with-string-set.cpuprofile
    - mapとsetの方
        - src/abc/450/with-map-and-set.cpuprofile
    - 文字列変換のどこにそんなに時間がかかるのかを知りたい

## 解説