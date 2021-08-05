#!/usr/bin/env bash

type npm > /dev/null || exit

cd "$(dirname "$0")"

npm install pegjs@0.10.0
node_modules/pegjs/bin/pegjs --cache --allowed-start-rules Root -o fl9_parser.js fl9_parser.pegjs
node_modules/pegjs/bin/pegjs --cache --allowed-start-rules EmbeddedFluoriteRoot -o fl9_parser_embedded.js fl9_parser.pegjs

chmod +x fl9
chmod +x fl9f
chmod +x fl9e
chmod +x fl9u
