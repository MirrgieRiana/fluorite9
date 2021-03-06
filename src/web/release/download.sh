#!/usr/bin/env bash

type git > /dev/null || exit

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

) || exit

make_command() {
  rm -f "$1" || exit
  ln -s fl9-git/fluorite9/release/"$1" "$1" || exit
  chmod +x fl9-git/fluorite9/release/"$1" || exit
  chmod +x "$1" || exit
}

# 実行ファイルの生成
make_command fl9
make_command fl9f
make_command fl9e
make_command fl9u
