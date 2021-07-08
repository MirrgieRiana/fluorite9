
[![CI](https://github.com/MirrgieRiana/fluorite9/actions/workflows/ci.yml/badge.svg?branch=main&event=push)](https://github.com/MirrgieRiana/fluorite9/actions/workflows/ci.yml)

# fluorite9(fl9) - Symbolic Programming Language for One-liner

# Browser Version

### Online fluorite9 Editor

https://mirrgieriana.github.io/fluorite9/release/editor.html

# Console Version

## Installation

### 1. Environment

fl9 requires the latest versions of git, nodejs and npm.

Install commands on Debian:

```
sudo apt update
sudo apt install -y git
sudo apt install -y nodejs
sudo apt install -y npm
sudo npm install -g n
sudo n latest
```

### 2. Download fl9

Install in the current directory

```bash
curl https://raw.githubusercontent.com/MirrgieRiana/fluorite9/doc/release/download.sh | bash
```

Or, install in the `/usr/local/bin`

```bash
sudo bash -c '(cd /usr/local/bin; curl https://raw.githubusercontent.com/MirrgieRiana/fluorite9/doc/release/download.sh | bash)'
```

### 3. Usage

The fl9 command will be generated in the installed location.

```bash
$ fl9 '1 + 2 + 3'
6
```

# Documentation

See [fluorite9 Portal](https://mirrgieriana.github.io/fluorite9/).
