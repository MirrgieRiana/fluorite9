#!/usr/bin/env bash

type npm > /dev/null || exit
type node > /dev/null || exit

cd "$(dirname "$0")"

npm install nexe@3.3.3
node nexe.js
