// Your tests here
// src/__tests__/utils.test.js

const { isPalindrome } = require('../utils');

describe('isPalindrome', () => {
  it('should return true for a known palindrome', () => {
    expect(isPalindrome('racecar')).toBe(true);
  });

  it('should return false for a non-palindrome', () => {
    expect(isPalindrome('car')).toBe(false);
  });

  // Add more test cases here (edge cases, bonus tests, etc.)
});
