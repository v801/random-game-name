#!/usr/bin/env node

'use strict'

const randomGameName = require('./')
const { Command } = require('commander');
const program = new Command();

program
  .name('random-game-name')
  .description('Get a random video game name.')
  .version('1.0.1')
  .action(() => {
    console.log(randomGameName());
  });

program.parse();