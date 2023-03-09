const divide = require('./divide');

test('divides 1 / 2 to equal 2', () => {
  expect(divide(1, 2)).toBe(.5);
});