/* Simple Evens
Have the function SimpleEvens(num) check whether every single number in the passed in parameter is even. 
If so, return the string true, otherwise return the string false.
For example: if num is 4602225 your program should return the string false because 5 is not an even number.

Examples
Input: 2222220222
Output: true
Input: 20864646452
Output: false

Tags
math fundamentals   */

function SimpleEvens(num) { 

  num = num.toString();                    // 1. Convert given number to string using .toString() method.
  
  // code goes here  
  
  for (let i =0; i < num.length; i++) {    // 2. Use For Loop to iterate through each every characters of given numer string to check whether every single number is even.
    if ( num[i] % 2 !== 0) {               
      return false                         // 3. If not so, return the string false.
        }
  }
 return true;                              // 4. Otherwise return the string true.
}
   
// keep this function call here 
console.log(SimpleEvens(readline()));
