#!/usr/bin/env bash

cd "$(dirname "$0")"

type npm || exit
type node || exit
npm install nexe@3.3.3
node nexe.js
