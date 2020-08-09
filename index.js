'use strict'

const randomItem = require('random-item')
const videoGameList = require('./videoGameList.json')

const randomFirstWord = randomItem(videoGameList.first)
const randomSecondWord = randomItem(videoGameList.second)
const randomThirdWord = randomItem(videoGameList.third)

const randomGameName = () => {
  return `${randomFirstWord} ${randomSecondWord} ${randomThirdWord}`
}

module.exports = randomGameName
