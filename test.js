const randomGameName = require('./')

test('returns a string', () => {
  expect(typeof randomGameName()).toBe('string')
})
