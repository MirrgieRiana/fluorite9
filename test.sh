#!/usr/bin/env bash
dir=$(cd "$(dirname "$0")"; pwd)
cd "$dir"/build/web/release || exit

# language
NODE_PATH=$dir/build/web/release node "$dir"/src/test/js/test.js || exit

# console interface
PATH=$PATH:$dir/build/web/release bash "$dir"/src/test/sh/test.sh || exit
