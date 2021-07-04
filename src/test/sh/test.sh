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
[ 15 == "$(  node -e '
  const fl9_runtime = require("fl9_runtime.js");
  const runtime = new fl9_runtime.Runtime();
  runtime.addLibrary(require("fl9_lib/std.js").main(runtime));
  console.log(require("./tmp1.js").main(runtime))
'  )" ] || exit

# console.js
{

  # 改行文字はカットされる
  [ "ab" == "$(  { echo -en "a\r"; echo -en "b\r"; } | fl9 'a : [IN]; a[0] + a[1]' )" ] || exit
  [ "ab" == "$(  { echo -en "a\n"; echo -en "b\n"; } | fl9 'a : [IN]; a[0] + a[1]' )" ] || exit
  [ "ab" == "$(  { echo -en "a\r\n"; echo -en "b\r\n"; } | fl9 'a : [IN]; a[0] + a[1]' )" ] || exit

  # 末尾に改行がある場合は無視する
  [ 2 == "$(  { echo "a"; echo "b"; } | fl9 '[IN].$#' )" ] || exit

  # 末尾に改行がなくてもよい
  [ 2 == "$(  { echo "a"; echo -n "b"; } | fl9 '[IN].$#' )" ] || exit

}


echo "test.sh OK"
exit 0
