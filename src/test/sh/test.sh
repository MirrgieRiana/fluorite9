#!/usr/bin/env bash

[ 15 == "$(fl9 '1 + 2 + 3 + 4 + 5')" ] || exit

echo "test.sh OK"
exit 0
