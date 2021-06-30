#!/usr/bin/env bash

cd "$(dirname "$0")"

type npm || exit
npm install pegjs@0.10.0
node_modules/pegjs/bin/pegjs --cache --allowed-start-rules Root fl9_parser.pegjs
