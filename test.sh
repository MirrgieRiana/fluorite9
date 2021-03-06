#!/usr/bin/env bash
dir=$(cd "$(dirname "$0")"; pwd)

mkdir -p "$dir"/build/test || exit
cd "$dir"/build/test || exit

PATH=$dir/build/web/release:$PATH
export PATH
NODE_PATH="$dir"/build/web/release
export NODE_PATH

# language
node "$dir"/src/test/js/test.js || exit

# console interface
bash "$dir"/src/test/sh/test.sh || exit
