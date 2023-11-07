/* One Decremented
Have the function OneDecremented(str) count how many times a digit appears that is exactly one less than the previous digit. 
For example: if str is "5655984" then your program should return 2 because 5 appears directly after 6 and 8 appears directly after 9. 
The input will always contain at least 1 digit.
Examples
Input: "56"
Output: 0
Input: "9876541110"
Output: 6

Tags
math fundamentals */

function OneDecremented(str) { 

  // code goes here 

  let count = 0;                                 // 1. Initial state of count shall be "zero".
  for (let i = 1; i < str.length; i++) {         // 2. Use For Loop to check each every character of given string if a digit appears that is exactly one less than the previous digit.
  if (str[i-1]-str[i] === 1) {                   // 3. If it is true;
      count += 1;                                // 4. Update count . 
  }              
  return count;                                  // 5. Return the count.
}
   
// keep this function call here 
console.log(OneDecremented(readline()));
