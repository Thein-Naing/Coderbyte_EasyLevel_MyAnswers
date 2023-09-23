/* Sum Multiplier
Have the function SumMultiplier(arr) take the array of numbers stored in arr and return the string true 
if any two numbers can be multiplied so that the answer is greater than double the sum of all the elements in the array. 
If not, return the string false. For example: if arr is [2, 5, 6, -6, 16, 2, 3, 6, 5, 3]
then the sum of all these elements is 42 and doubling it is 84. 
There are two elements in the array, 16 * 6 = 96 and 96 is greater than 84, so your program should return the string true.

Examples
Input: [2, 2, 2, 2, 4, 1]
Output: false
Input: [1, 1, 2, 10, 3, 1, 12]
Output: true

Tags
array math fundamentals sequences  */

function SumMultiplier(arr) { 

  // code goes here  
  
/*  Method A */ 
  
  let sum = arr.reduce((a, b) => ( a +b)) * 2;                                  // 1. find sum of given array and double it by using arr.reduce method.       
    for(let i =0; i < arr.length; i++) {                                        /* 2. loop through each every number of array by using for loop method .*/  
      
                                                                                 
                                                                                      
      for(let j = i + 1; j < arr.length; j++ ) {                                 // 3. inside inner loop, find largest number from outer loop and inner loop, 
        if ((arr[i] * arr[j])  > sum ) {                                         //    then multiply this two numbers each other and compare with sum.                             
           return true                                                           // 4. if it is, return true.
        }
      }
    }
    return false;                                                                // 5. otherwise return false.
}

  /* Method B */

  let sum = arr.reduce((a, b) => ( a +b)) * 2;                                  // 1. find sum of given array and double it using arr.reduce method.
  return  arr.sort((a, b) => b -a)[0]  * arr.sort((a, b) => b-a)[1] > sum       /* 2. find two largest number of array by using arr.sort method, multiply each other, 
                                                                                     compare with sum and then just return it. */

  /* Method C */
  
  return  arr.sort((a, b) => b -a)[0]  * arr.sort((a, b) => b-a)[1] > arr.reduce((a, b) => ( a +b)) * 2;           // 1. same procedure as Method B.
 
// keep this function call here 
console.log(SumMultiplier(readline()));
