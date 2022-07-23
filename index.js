#!/usr/bin/env node

'use strict'

const videoGameList = require('./videoGameList.json')

function getRandom (list) {
  return list[Math.floor((Math.random()*list.length))]
}

const randomGameName = () => {
  const randomFirstWord = getRandom(videoGameList.first)
  const randomSecondWord = getRandom(videoGameList.second)
  const randomThirdWord = getRandom(videoGameList.third)
  return `${randomFirstWord} ${randomSecondWord} ${randomThirdWord}`
}

module.exports = randomGameName