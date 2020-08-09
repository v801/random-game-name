#!/usr/bin/env node

'use strict'

const meow = require('meow')
const randomGameName = require('./')

const cli = meow(`
  Usage
    $ random-game-name

  Options
    --random, -r  Get a random video game name

  Examples
    $ random-game-name
    Inept Caveman Overload
`, {
  flags: {
    random: {
      type: 'boolean',
      default: true,
      alias: 'r'
    }
  }
})

console.log(randomGameName())
