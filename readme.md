# random game name

[![v801](https://img.shields.io/circleci/build/gh/v801/random-game-name/main?style=flat-square)](https://app.circleci.com/pipelines/github/v801/random-game-name)
[![Unlicense](https://img.shields.io/badge/unlicense-oh%20yeah-blue.svg?style=flat-square)](http://unlicense.org)

> Get a random video game name
>
> Inspired by [videogamena.me](http://videogamena.me)

The names are generated from a [JSON file](videoGameList.json).

## Install

```
$ npm i --save v801/random-game-name
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
$ random-game-name help

  Get a random video game name

  usage
    $ random-game-name

  Examples
    $ random-game-name
    Inept Caveman Overload
```

## [Unlicense](unlicense)
