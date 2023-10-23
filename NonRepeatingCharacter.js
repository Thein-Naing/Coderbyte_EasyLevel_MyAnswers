/* Nonrepeating Character
Have the function NonrepeatingCharacter(str) take the str parameter being passed, which will contain only alphabetic characters and spaces, and return the first non-repeating character.
For example: if str is "agettkgaeee" then your program should return k.
The string will always contain at least one character and there will always be at least one non-repeating character.

Examples
Input: "abcdef"
Output: a
Input: "hello world hi hey"
Output: w

Tags
searching hash table Amazon Microsoft */


function NonrepeatingCharacter(str) { 

  // code goes here  
 for(let i = 0; i < str.length; i++) {
     
    if (str.indexOf(str[i]) === i && str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
       return str[i];
          }
      }
  return -1;
  } 
    

  
   
// keep this function call here 
console.log(NonrepeatingCharacter(readline()));
