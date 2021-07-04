#!/usr/bin/env bash
dir=$(cd "$(dirname "$0")"; pwd)

mkdir -p "$dir"/build/test || exit
cd "$dir"/build/test || exit

# language
NODE_PATH="$dir"/build/web/release node "$dir"/src/test/js/test.js || exit

# console interface
chmod +x "$dir"/build/web/release/fl9
PATH=$PATH:"$dir"/build/web/release NODE_PATH="$dir"/build/web/release bash "$dir"/src/test/sh/test.sh || exit
