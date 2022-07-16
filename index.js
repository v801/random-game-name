#!/usr/bin/env node

'use strict'

import randomItem from 'random-item';
import { readFile } from 'fs/promises';
const videoGameList = JSON.parse(
  await readFile(
    new URL('./videoGameList.json', import.meta.url)
  )
);

const randomFirstWord = randomItem(videoGameList.first)
const randomSecondWord = randomItem(videoGameList.second)
const randomThirdWord = randomItem(videoGameList.third)

const randomGameName = () => {
  return `${randomFirstWord} ${randomSecondWord} ${randomThirdWord}`
}

export default randomGameName