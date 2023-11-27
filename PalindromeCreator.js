/*easy 
Palindrome Creator
Have the function PalindromeCreator(str) take the str parameter being passed and determine if it is possible to create a palindromic string of minimum length 3 characters by removing 1 or 2 characters.
For example: if str is "abjchba" then you can remove the characters jc to produce "abhba" which is a palindrome. For this example your program should return the two characters that were removed with no delimiter and in the order they appear in the string, so jc.
If 1 or 2 characters cannot be removed to produce a palindrome, then return the string not possible.
If the input string is already a palindrome, your program should return the string palindrome. 
Your program should always remove the characters that appear earlier in the string.
In the example above, you can also remove ch to form a palindrome but jc appears first, so the correct answer is jc.
The input will only contain lowercase alphabetic characters.
Your program should always attempt to create the longest palindromic substring by removing 1 or 2 characters (see second sample test case as an example). 
The 2 characters you remove do not have to be adjacent in the string.
Examples
Input: "mmop"
Output: not possible
Input: "kjjjhjjj"
Output: k

Tags
string manipulation searching */

function PalindromeCreator(str) { 

  // code goes here  
  if (str === str.split("").reverse().join("")) {                                 // 1. Edge case.
    return "Palindrome";
  }

  for (let i = 0; i < str.length; i++) {                                          // 2. Remove one character and test the new word.   
    const word1 = str.slice(0, i) + str.slice(i + 1);
    // 3. console.log(str.slice(0, i) + i + str.slice(i + 1)); 0axcecar, r1xcecar, ra2cecar
    if (word1 === word1.split("").reverse().join("") && word1.length >= 3) {     // 4. Check new word is a Palindrome. If say so, return the removed letter.
      return str[i];    
    }
  }
  for (let i = 0; i < str.length; i++) {
      const word1 = str.slice(0, i) + str.slice(i + 1);                           // 5. Remove two character and test the new word.   
  for (let j = i ; j < word1.length; j++) {
      const word2 = word1.slice(0, j) + word1.slice(j + 1);     
      if (word2 === word2.split("").reverse().join("") && word2.length >= 3) {
        return str[i] + word1[j];       
       
      }
    }
  }
                                                 
  return "not possible";                                                         // 6.If palindrome does not exist, return 'not possible'.

}
// keep this function call here 
console.log(PalindromeCreator(readline()));
