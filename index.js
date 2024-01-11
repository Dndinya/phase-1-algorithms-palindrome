function isPalindrome(word) {
  // Write your algorithm here
  const cleanStr = word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Compare the original and reversed strings
    return cleanStr === cleanStr.split('').reverse().join('');
}

/* 
  Add your pseudocode here
  the function to have one arguement  which should be a string
  return true if string === string.reverse()
*/

/*
  Add written explanation of your solution here

The regular expression [^a-zA-Z0-9] matches any character that is not in
 the ranges a-z, A-Z, or 0-9. The g flag stands for global, meaning it 
 replaces all occurrences with an empty string
.toLowerCase():  
the resulting string is converted to lowercase using the 
.toLowerCase() method. This ensures that the comparison for 
palindrome checking is case-insensitive.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  console.log("What of mom", isPalindrome("mom"));
  console.log("What of hello", isPalindrome("hello"));
  console.log("What of abba", isPalindrome("abba"));
}

module.exports = isPalindrome;
