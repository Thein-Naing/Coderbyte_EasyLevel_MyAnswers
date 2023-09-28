/* Happy Numbers
Have the function HappyNumbers(num) determine if a number is Happy, which is a number whose sum of the square of the digits eventually converges to 1.
Return true if it's a Happy number, otherwise return false.

For example: the number 10 is Happy because 1^2 + 0^2 converges to 1.

Examples
Input: 1
Output: true
Input: 101
Output: false

Tags
math fundamentals */

function HappyNumbers(num) { 

  // code goes here  

  /* clarification: it is a specified condition to meet desired result at the end and we should use while loop.because the while loop loops through a block of code 
     as long as a specified condition is true/met. */ 

     // 1. for num = 1 , return true; for 2 =< num =< 9 , return false; for num >= 10 , we have to find value of sum.
     // 2. then we have to compare value of sum is equal to the value of num === 1.
     // 3. if sum = 1 , then return will be true orthewise return will be false.
     /* 4. to do that, we specify a specific condition which state the value of num is equal to the value of sum 
           in the while loop block to check if value of sum is equal to 1. */
     // 5. then we return value of num is equal to 1. Meaning: value of sum ==== 1 ? true : false.


  while ( num > 9) {
    let sum = num.toString().split("").reduce((a, b) => a + b ** 2, 0)   //  6.( a + b ** 2 = a ** 2 + b ** 2)
    num = sum;   // 7.  then update num to specify a specific condition which state the value of num is equal to the value of sum.
  }  
return num === 1  // 8. Meaning: (return sum === 1) ==== (return num === 1)

}

// keep this function call here 
console.log(HappyNumbers(readline()));
