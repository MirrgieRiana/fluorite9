#!/usr/bin/env bash

ch "$(dirname "$0")"

type npm || exit
type node || exit
npm install nexe@3.3.3
nano nexe.js
