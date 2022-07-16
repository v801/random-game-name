#!/usr/bin/env node

'strict'

const randomGameName = require('./index.js');

test('returns a string', () => {
  expect(typeof randomGameName()).toBe('string')
})
