//Repeated Lab
function isPalindrome(word) {
  // Write your algorithm here
  //convert string to array
  const wordArray = word.split('');
  //reverse the string array
  const reversedWordArray = wordArray.reverse();
  //convert array back to string
  const reverseWord = reversedWordArray.join('');
  //use if statement and compare string to its reverse
  if(word===reverseWord) {
    //return true if they are identical
    return true;
  } else {
    //return false if they do not match
    return false;
  }
}

/* 
  .split() method to convert string to array
  .reverse() method to reverse the array values
  .join() to convert the reversed array back to a string
  if statement to return true or false 
*/

/*
 convert string to array, reverse, convert back to string and compare to original string
*/

/* Optimized code
function isPalindrome(word) {
  const reverseWord = word.split('').reverse().join('');
  return (word===reverseWord)? true: false;
}
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
  console.log("=>", isPalindrome("noon"));
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  console.log("=>", isPalindrome("kuchoka"));
}

module.exports = isPalindrome;
