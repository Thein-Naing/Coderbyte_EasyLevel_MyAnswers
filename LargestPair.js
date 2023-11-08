/*  Largest Pair
easy

Have the function LargestPair(num) take the num parameter being passed and determine the largest double digit number within the whole number. 
For example: if num is 4759472 then your program should return 94 because that is the largest double digit number. 
The input will always contain at least two positive digits.

Examples
Input: 453857
Output: 85
Input: 363223311
Output: 63

Tags
math fundamentals searching */


function LargestPair(num) { 

  // code goes here  
  num = String(num).split("");                     // 1. Convert given num to string and split it.
  let largest = 0;
  for (let i = 0; i < num.length; i++) {           // 2. Loop through each every character of given num array to check if integer value of pair is gerater than the largest.
    if (parseInt(num[i] + num[i + 1]) > largest) {
      largest = parseInt(num[i] + num[i + 1]);     // 3. If say so  then we found the largest number and return it. Use parseInt() method to change character to digital value.
    }
  }

  return largest;

}
   
// keep this function call here 
console.log(LargestPair(readline()));





