#!/usr/bin/env bash

# 普通に実行できる
[ 15 == "$(  fl9 '1 + 2 + 3 + 4 + 5'  )" ] || exit

# -- を付けてもよい
[ 15 == "$(  fl9 -- '1 + 2 + 3 + 4 + 5'  )" ] || exit

# -f はパイプファイルからでも入力できる
[ 15 == "$(  fl9 -f <(echo '1 + 2 + 3 + 4 + 5')  )" ] || exit

# -f - で標準入力からソースコードを読み取る
[ 15 == "$(  echo '1 + 2 + 3 + 4 + 5' | fl9 -f -  )" ] || exit

# 構文木出力モード・JSコード出力モードを経由しても結果は変わらない
[ 15 == "$(  fl9 '1 + 2 + 3 + 4 + 5' -n | fl9 -f - -N -c | fl9 -f - -C  )" ] || exit

# JSコード出力したものをnodeで実行できる
fl9 '1 + 2 + 3 + 4 + 5' -c > tmp1.js
[ 15 == "$(  node -e 'console.log(require("./tmp1.js").main(require("fl9_runtime.js")))'  )" ] || exit

echo "test.sh OK"
exit 0
