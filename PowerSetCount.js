/* Power Set Count
Have the function PowerSetCount(arr) take the array of integers stored in arr, and return the length of the power set (the number of all possible sets) that can be generated.
For example: if arr is [1, 2, 3], then the following sets form the power set:

[]
[1]
[2]
[3]
[1, 2]
[1, 3]
[2, 3]
[1, 2, 3]

You can see above all possible sets, along with the empty set, are generated. Therefore, for this input, your program should return 8.
Examples
Input: [1, 2, 3, 4]
Output: 16
Input: [5, 6]
Output: 4

Tags
set theory combinatorics Google Facebook */

function PowerSetCount(arr) { 

  // code goes here  
  // Method Statement: Use Math.pow(base(x), exponent(y)) method. Math.pow(x,y) returns the value of x to the power of y:

  return Math.pow(2, arr.length);             /*  Given Statement: You can see above all possible sets, along with the empty set, are generated. 
                                                   1. base value x !== 0; 
                                                      empty set [] = 1  and so base value shall be  ----> [],[some digit] === 2 */

}
   
// keep this function call here 
console.log(PowerSetCount(readline()));
