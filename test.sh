#!/usr/bin/env bash
dir=$(cd "$(dirname "$0")"; pwd)
cd "$dir"/build/web/release || exit
NODE_PATH="$dir"/build/web/release exec node "$dir"/src/test/js/test.js
