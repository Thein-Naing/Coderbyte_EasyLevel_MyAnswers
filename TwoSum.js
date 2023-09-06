 /*Two Sum

Have the function TwoSum(arr) take the array of integers stored in arr, and determine if any two numbers 
(excluding the first element) in the array can sum up to the first element in the array. 
For example: if arr is [7, 3, 5, 2, -4, 8, 11], then there are actually two pairs that sum to the number 7: [5, 2] 
and [-4, 11]. Your program should return all pairs, with the numbers separated by a comma, 
in the order the first number appears in the array. Pairs should be separated by a space. 
So for the example above, your program would return: 5,2 -4,11

If there are no two numbers that sum to the first element in the array, return -1 */

function TwoSum(arr) { 

  // code goes here  

  let stack = []; /*1. create an empty array to store results pair of numbers 
     which are sum up to first element in given array. */
   
    /* 2. This will be nested loop because  we have to check two numbers and compare their sum to firsr element.
     first, loop through each number in array except first element.*/

  for (let i = 1; i < arr.length; i++) { 

  // 3. loop through each other numbers except first element and i.
    for (let j = i + 1; j < arr.length; j++) {

  /* 4. check if sum of these two numbers equal to first element.
   first element of given array should be arr[0] and if it is true, 
   then add this two elements into stack using .push method. */

      if (arr[i] + arr[j] === arr[0]) {
        stack.push([arr[i], arr[j]]);
      }
    }
  }

  /* 5.return all pairs of numbers that sum to first element
   by using ternary operator and .length method.
   /* 6. If there are no two numbers that sum to the first element in the array, return -1 */
  
  return stack.length > 0 ? stack.join(' ') : -1; 
}
     
// keep this function call here 
console.log(TwoSum(readline()));  // 5,2 -4,11

/* 7. for other VS code format,  replace readline with actual array.
// keep this function call here 
console.log(TwoSum([7, 3, 5, 2, -4, 8, 11]));  */
