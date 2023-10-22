/* H Distance
Have the function HDistance(strArr) take the array of strings stored in strArr, which will only contain two strings of equal length and return the number of characters at each position that are different between them. 
For example: if strArr is ["house", "hours"] then your program should return 2.
The string will always be of equal length and will only contain lowercase characters from the alphabet and numbers.

Examples
Input: ["10011", "10100"]
Output: 3
Input: ["abcdef", "defabc"]
Output: 6

Tags
array searching */

function HDistance(strArr) { 

  // code goes here                                            // Given Statement: The strArr which will only contain two strings of equal length. So we don't need to use nested array.
  let count = 0;                                               // 1. Initial state of count shall be "zero".
  for (let i = 0; i < strArr[0].length; i++) {                 // 2. Use For Loop to check character of words1 !== character of words2.
     if ( strArr[1][i] !== strArr[0][i]) {                     // 3. If this is the case, increment the count by 1 for every characters we found.
          count += 1;                                          // 4. update the state of the count.
    
     } 
   }
    return count;                                              // 5. Return count.
  }
   
// keep this function call here 
console.log(HDistance(readline()));
