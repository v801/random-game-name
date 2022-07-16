#!/usr/bin/env node

'strict'

import randomGameName from './index.js'

test('returns a string', () => {
  expect(typeof randomGameName()).toBe('string')
})
