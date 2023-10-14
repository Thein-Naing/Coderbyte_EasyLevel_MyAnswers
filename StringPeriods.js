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
  
  let longest = -1;                               // 1. initial state of longest substring shall be -1 as per given statement.

  for (let i = 0; i < str.length - 1; i++) {      // 2. Use For Loop to determine if there is some substring that can be repeated more than one time to produce the input string exactly as it appears.
  
      let subStrA = str.slice(0, i+1)             // 3. Use str.slice() method to create subStr1 which is started from str[0] (if str[i]=== a and str[i+1] === b then strA === ab)
      let count = str.length / subStrA.length;    // 4. Calculate how many times of repeated subStrA by dividing str.length by subStrA.length.
      let subStrB = ""                            // 5. We have to find another subStrB which is repeated same as subStrA to create the final string.

  for(let j = 0; j < count; j++) {                // 6. Use nested For Loop again to determine subStrA is equal to subStrB by looping through numbers of count and update subStrB.
     subStrB += subStrA
      } 
    if (subStrB === str) {                        // 7. If there is no more repeating case of subStrA, (meaning: subStrB is same as str) and then subStrA is the final string(longest).
      longest = subStrA
    
    }
  }
  return longest;                               // 8. Return longest.
}


   
// keep this function call here 
console.log(StringPeriods(readline()));
