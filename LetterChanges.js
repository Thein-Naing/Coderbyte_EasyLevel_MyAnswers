/* Letter Changes
Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm.
Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). 
Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.
Examples
Input: "hello*3"
Output: Ifmmp*3
Input: "fun times!"
Output: gvO Ujnft! */

function LetterChanges(str) { 

  // code goes here 
  str1 = str.replace(/[a-y]/gi, function(a){return String.fromCharCode(a.charCodeAt(0)+1)});
  str2 = str1.replace(/z/gi,"a");
  str3 = str2.replace(/a|e|i|o|u/gi, function(a){return a.toUpperCase()});
  return str3; 
         
}
   
// keep this function call here 
LetterChanges(readline());
