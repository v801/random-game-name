# random game name

[![travis build](https://img.shields.io/travis/v801/random-game-name.svg?style=flat-square)](https://travis-ci.org/v801/random-game-name)
[![dependencies Status](https://david-dm.org/v801/random-game-name/status.svg)](https://david-dm.org/v801/random-game-name)
[![Unlicense](https://img.shields.io/badge/unlicense-oh%20yeah-blue.svg?style=flat-square)](http://unlicense.org)

> Get a random ass video game name
>
> Inspired by [videogamena.me](http://videogamena.me)

The names are generated from a [JSON file](videoGameList.json).

## Install

```
$ npm install --save v801/random-game-name
```

## Usage

```js
const randomGameName = require('random-game-name')

randomGameName()
//=> 'Inept Caveman Overload'
```

## API

### randomGameName()

Type: `function`

Random video game name.

## CLI

```
$ npm install -g v801/random-game-name
```

```
$ random-game-name --help

  Get a random video game name

  usage
    $ random-game-name

  Options
    --random, -r  Get a random video game name

  Examples
    $ random-game-name
    Inept Caveman Overload
```

## [Unlicense](unlicense)
