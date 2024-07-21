// index.js

// Function to check if a string is a palindrome
function isPalindrome(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
      if (s[left] !== s[right]) {
          return false;
      }
      left++;
      right--;
  }

  return true;
}

// Export the function for testing
module.exports = isPalindrome;

// test/indexTest.js

const isPalindrome = require('../index');

describe('isPalindrome', function() {
    it('returns true for "abba"', function() {
        assert.strictEqual(isPalindrome('abba'), true);
    });

    it('returns true for "racecar"', function() {
        assert.strictEqual(isPalindrome('racecar'), true);
    });

    it('returns true for "a"', function() {
        assert.strictEqual(isPalindrome('a'), true);
    });

    it('returns false for "robot"', function() {
        assert.strictEqual(isPalindrome('robot'), false);
    });

    it('returns false for "ab"', function() {
        assert.strictEqual(isPalindrome('ab'), false);
    });
});
