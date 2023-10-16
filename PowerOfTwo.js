/* easy 
Powers of Two
Have the function PowersofTwo(num) take the num parameter being passed which will be an integer and return the string true if it's a power of two. 
If it's not return the string false. 
For example if the input is 16 then your program should return the string true but if the input is 22 then the output should be the string false.

Examples
Input: 4
Output: true
Input: 124
Output: false

Tags
math fundamentals Google */

function PowersofTwo(num) { 

/* Note. Divide a number by 2 repeatedly and if final number is 2 then this number is a power of 2. */
  
  let remainder = num % 2;                           // 1. initiate remainder variable to decide if a number is divisible by 2.
  let finalNum = num / 2;                            // 2. Initiate quotient as finalNum to determine if it is still divisible by 2.   
  while (remainder === 0 && finalNum !== 2) {        /* 3. Use While Loop to repeat a section of code an unknown number of times until a specific/desired condition is met.
                                                           Here we will divide finalNum by 2 until only 1 digit is left which is equal to 2.
                                                           Meaning: remainder === 0 means number is divisible by 2. finalNum !== 2 means finaNum is still divisible by 2
                                                           and if it is true update remainder value, remainder = finalNum % 2  and which is last finalNum.
                                                           The last finalNum shall be single digit and equal to finalNum(which is still divisible by 2) divided by 2. */
    remainder = finalNum % 2;
    finalNum = finalNum / 2;
  }

 return finalNum === 2 ? true : num === 2 ? true : false;    // 4. If the last finalNum = 2 then return true, for single digit input, num === 2 then return true, otherwise return false.
  
}
   
// keep this function call here 
console.log(PowersofTwo(readline()));
