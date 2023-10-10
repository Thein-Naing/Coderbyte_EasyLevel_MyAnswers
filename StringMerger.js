/* String Merge
Have the function StringMerge(str) read the str parameter being passed which will contain a large string of alphanumeric characters with a single asterisk character splitting the string evenly into two separate strings. 
Your goal is to return a new string by pairing up the characters in the corresponding locations in both strings. 
For example: if str is "abc1*kyoo" then your program should return the string akbyco1o because a pairs with k, b pairs with y, etc. 
The string will always split evenly with the asterisk in the center.

Examples
Input: "aaa*bbb"
Output: ababab
Input: "123hg*aaabb"
Output: 1a2a3ahbgb

Tags
string manipulation searching Facebook  */


function StringMerge(str) { 

  // code goes here  

  let strA = str.split("*")[0] // 1. divide the given string into an ordered array of letters using arr.split(" * ") and assign str[0].
  let strB = str.split("*")[1] // 2. divide the given string into an ordered array of letters using arr.split(" * ") and assign str[1].
  let strC = ""                // 3. initiall result string shall be empty string and eventually alphanumeric characters will be added alternatively from strA and strB.
  
  for (let i = 0; i < strA.length; i++) {   // 4. initiale For Loop and i shall be strated counting from strA.
      strC += (strA[i] + strB[i])           // 5. then adding alphanumeric characters to new str alternatively from strA and strB and assign to strC.
   }
   return strC;                             // 6. return strC.
}
   
// keep this function call here 
console.log(StringMerge(readline()));
