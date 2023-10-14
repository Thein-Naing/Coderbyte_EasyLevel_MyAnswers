/* String Periods
Have the function StringPeriods(str) take the str parameter being passed and determine if there is some substring K that can be repeated N > 1 times to produce the input string exactly as it appears.
Your program should return the longest substring K, and if there is none it should return the string -1.

For example: if str is "abcababcababcab" then your program should return abcab because that is the longest substring that is repeated 3 times to create the final string. 
Another example: if str is "abababababab" then your program should return ababab because it is the longest substring. 
If the input string contains only a single character, your program should return the string -1.

Examples
Input: "abcxabc"
Output: -1
Input: "affedaaffed"
Output: -1
Tags
math fundamentals algebra recursion string manipulation Google Microsoft */

function StringPeriods(str) { 

  // code goes here  
  
  let longest = -1;

  for (let i = 1; i < str.length - 1; i++) {
  
      let subStr1 = str.slice(0, i+1)
      let count = str.length / subStr1.length;
      let subStr2 = ""

  for(let j = 0; j < count; j++) {    
     subStr2 += subStr1
      } 
    if (subStr2 === str) {
      longest = subStr1
    
    }
  }
  return longest;
}


   
// keep this function call here 
console.log(StringPeriods(readline()));
