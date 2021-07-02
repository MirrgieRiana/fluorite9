#!/usr/bin/env bash

type npm > /dev/null || exit

cd "$(dirname "$0")"

npm install pegjs@0.10.0
node_modules/pegjs/bin/pegjs --cache --allowed-start-rules Root fl9_parser.pegjs
