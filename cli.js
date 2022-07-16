#!/usr/bin/env node

'use strict'

import meow from 'meow'
import randomGameName from './index.js'

const cli = meow(`
  Usage
    $ random-game-name

  Options
    --random, -r  Get a random video game name

  Examples
    $ random-game-name
    Inept Caveman Overload
`, {
  importMeta: import.meta,
  flags: {
    random: {
      type: 'boolean',
      default: true,
      alias: 'r'
    }
  }
})

console.log(randomGameName())
