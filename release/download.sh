#!/usr/bin/env bash

(

  # コンテナディレクトリ内に移動
  if [ ! -e fl9-git ]
  then
    mkdir fl9-git || exit
  fi
  cd fl9-git || exit

  # リポジトリを準備して内部に移動
  if [ ! -e fluorite9 ]
  then
    GIT_SSH_COMMAND='ssh -o StrictHostKeyChecking=no' git clone -b doc --depth 1 https://github.com/MirrgieRiana/fluorite9.git || exit
    cd fluorite9 || exit
  else
    cd fluorite9 || exit
    git checkout -f || exit
    git clean -fd || exit
    git pull || exit
  fi

  # releaseディレクトリに移動
  cd release || exit

  # コンパイル
  bash make.sh || exit

) || exit

# 実行ファイルの生成
ln -s fl9-git/fluorite9/release/fl9 fl9 || exit
chmod +x fl9 || exit

