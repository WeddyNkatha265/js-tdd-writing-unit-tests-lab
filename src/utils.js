// Your code here
// src/utils.js

function isPalindrome(str) {
    // Remove spaces and convert to lowercase for comparison
    const cleanedStr = str.replace(/\s/g, '').toLowerCase();
    
    // Check if the cleaned string is the same when reversed
    return cleanedStr === cleanedStr.split('').reverse().join('');
  }
  
  module.exports = { isPalindrome };
  