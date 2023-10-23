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
 for(let i = 0; i < str.length; i++) {                                                   // 1. Loop through each every character of given str to check if a character is repeated.
     
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {                               /* 2. Use str.indexOf() and str.lastIndexOf() methods to determine if an index is repeated. 
                                                                                               Meaning, if the first occurrence of the character is also the last occurrence, 
                                                                                               then (you know) it doesn't repeat. If not true, then it does repeat.*/
       return str[i];                                                                    // 3. If it doesn't repeat , return str[i].
          }
      }
  return -1;                                                                             // 4. If not true , then it does repeat and return -1.
  } 
    
   
// keep this function call here 
console.log(NonrepeatingCharacter(readline()));
