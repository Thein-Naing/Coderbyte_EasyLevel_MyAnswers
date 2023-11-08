/*Product Digits
Have the function ProductDigits(num) take the num parameter being passed which will be a positive integer, and determine the least amount of digits you need to multiply to produce it. 
For example: if num is 24 then you can multiply 8 by 3 which produces 24, so your program should return 2 because there is a total of only 2 digits that are needed.
Another example: if num is 90, you can multiply 10 * 9, so in this case your program should output 3 because you cannot reach 90 without using a total of 3 digits in your multiplication.
Examples
Input: 6
Output: 2
Input: 23
Output: 3

Tags
math fundamentals searching */


function ProductDigits(num) { 

  // code go here
  let stack = [];                     // 1. Initiate a stack to hold counts of digits.
    for(let i = 0; i <= num; i++) {   // 2. It shall be nested loop. Loop through given number to check product of each character from outer loop and inner loop equal to given num.
       for (j = 0; j <= num; j++) {
         if (i * j === num)           // 3. It it is so, then convert this character to digit using parseInt() method and add to stack.
         stack.push(parseInt(i.toString().length) + parseInt(j.toString().length));      
         
       }
    }
 return stack.sort((a,b)=> a - b)[0];     // 4. Sort the stack and return the index 0 of stack.
    
}
   
// keep this function call here 
console.log(ProductDigits(readline()));
