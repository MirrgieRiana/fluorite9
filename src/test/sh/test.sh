#!/usr/bin/env bash

assertEqual() {
  expected=$1
  actual=$2
  [ "$expected" == "$actual" ] || {
    echo "Assertion Error:" >&2
    echo "  expected: $expected" >&2
    echo "  actual  : $actual" >&2
    exit 1
  }
}

# 普通に実行できる
assertEqual 15 "$(  fl9 '1 + 2 + 3 + 4 + 5'  )"

# -- を付けてもよい
assertEqual 15 "$(  fl9 -- '1 + 2 + 3 + 4 + 5'  )"

# -f はパイプファイルからでも入力できる
assertEqual 15 "$(  fl9 -f <(echo '1 + 2 + 3 + 4 + 5')  )"

# -f - で標準入力からソースコードを読み取る
assertEqual 15 "$(  echo '1 + 2 + 3 + 4 + 5' | fl9 -f -  )"

# 構文木出力モード・JSコード出力モードを経由しても結果は変わらない
assertEqual 15 "$(  fl9 '1 + 2 + 3 + 4 + 5' -n | fl9 -f - -N -c | fl9 -f - -C  )"

# JSコード出力したものをnodeで実行できる
fl9 '1 + 2 + 3 + 4 + 5' -c > tmp1.js
assertEqual 15 "$(  node -e '
  const fl9_runtime = require("fl9_runtime.js");
  const runtime = new fl9_runtime.Runtime();
  runtime.addLibrary(require("fl9_lib/std.js").main(runtime));
  console.log(require("./tmp1.js").main(runtime))
'  )"

# console.js
{

  # 改行文字はカットされる
  assertEqual "ab" "$(  { echo -en "a\r"; echo -en "b\r"; } | fl9 'a : [IN]; a[0] + a[1]' )"
  assertEqual "ab" "$(  { echo -en "a\n"; echo -en "b\n"; } | fl9 'a : [IN]; a[0] + a[1]' )"
  assertEqual "ab" "$(  { echo -en "a\r\n"; echo -en "b\r\n"; } | fl9 'a : [IN]; a[0] + a[1]' )"

  # 末尾に改行がある場合は無視する
  assertEqual 2 "$(  { echo "a"; echo "b"; } | fl9 '[IN].$#' )"

  # 末尾に改行がなくてもよい
  assertEqual 2 "$(  { echo "a"; echo -n "b"; } | fl9 '[IN].$#' )"

}

echo "test.sh OK"
exit 0