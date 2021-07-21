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

# EFL
{

  # -e でEFLボディーとして実行
  assertEqual "aaa1,2,3bbb" "$(  fl9 -e 'aaa<%= [1; 2; 3] %>bbb'  )"

  # fl9e で fl9 -e の短縮形
  echo '#!/usr/bin/env fl9e' > tmp.fl9e
  echo 'aaa<%= [1; 2; 3] %>bbb' >> tmp.fl9e
  chmod +x tmp.fl9e
  assertEqual "$(echo "aaa1,2,3bbb")" "$(  ./tmp.fl9e  )"

}

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

  # INB
  assertEqual "52,10" "$(  echo "4" | fl9 'INB' )"

  # OUTB
  assertEqual "4" "$(  fl9 'OUTB[[52, 10]];' )"

  # OUTBで渡してINBで受け取っても同じ
  assertEqual "12345" "$(  echo "12345" | fl9 'INB | OUTB[_];'  )"

  # READ
  { echo "100"; echo "20"; } > tmp.txt
  assertEqual "120" "$(  fl9 '+READ["tmp.txt"]'  )"

}

echo "test.sh OK"
exit 0
