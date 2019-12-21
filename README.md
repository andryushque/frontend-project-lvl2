## Hexlet Project#2 - "Difference Generator"

[![Maintainability](https://api.codeclimate.com/v1/badges/f076d1608da0cb83c327/maintainability)](https://codeclimate.com/github/andryushque/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/f076d1608da0cb83c327/test_coverage)](https://codeclimate.com/github/andryushque/frontend-project-lvl2/test_coverage)
[![Build Status](https://travis-ci.org/andryushque/frontend-project-lvl2.svg?branch=master)](https://travis-ci.org/andryushque/frontend-project-lvl2?branch=master)

**Utility for finding differences in configuration files.**

## Installation
```
$ npm install -g hexlet-gendiff-andryushque
```

## Usage
```
$ gendiff [options] <firstConfig> <secondConfig>

Options:
  -V, --version        output the version number
  -f, --format [type]  output format
  -h, --help           output usage information

Output formats:
  - tree (default format)
  - plain
  - JSON

Types of config files:
  - .json
  - .yaml
  - .ini
```

## Example
```
$ gendiff before.json after.json

{
    host: hexlet.io
  + timeout: 20
  - timeout: 50
  - proxy: 123.234.53.22
  + verbose: true
  - follow: false
}
```

### Comparing two json files
[![asciicast](https://asciinema.org/a/289673.svg)](https://asciinema.org/a/289673)

### Comparing two yml files
[![asciicast](https://asciinema.org/a/289677.svg)](https://asciinema.org/a/289677)

### Comparing two ini files
[![asciicast](https://asciinema.org/a/289678.svg)](https://asciinema.org/a/289678)

### Comparing two files with recursive structure, output format - tree (default)
[![asciicast](https://asciinema.org/a/289668.svg)](https://asciinema.org/a/289668)

### Comparing two files with recursive structure, output format - plain
[![asciicast](https://asciinema.org/a/289666.svg)](https://asciinema.org/a/289666)

### Comparing two files with recursive structure, output format - json
[![asciicast](https://asciinema.org/a/289667.svg)](https://asciinema.org/a/289667)

## Uninstall
```
$ npm uninstall -g hexlet-gendiff-andryushque
```
