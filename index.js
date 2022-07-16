#!/usr/bin/env node

'use strict'

const videoGameList = require('./videoGameList.json')

function getRandom (list) {
  return list[Math.floor((Math.random()*list.length))];
}

const randomFirstWord = getRandom(videoGameList.first)
const randomSecondWord = getRandom(videoGameList.second)
const randomThirdWord = getRandom(videoGameList.third)

const randomGameName = () => {
  return `${randomFirstWord} ${randomSecondWord} ${randomThirdWord}`
}

module.exports = randomGameName