/*Wave Sorting *
easy

Have the function WaveSorting(arr) take the array of positive integers stored in arr and return the string true 
if the numbers can be arranged in a wave pattern: a1 > a2 < a3 > a4 < a5 > ...,
otherwise return the string false. For example, if arr is: [0, 1, 2, 4, 1, 4], then a possible wave ordering of the numbers is: [2, 0, 4, 1, 4, 1].
So for this input your program should return the string true. The input array will always contain at least 2 elements. 
More examples are given below as sample test cases.
Examples
Input: [0, 1, 2, 4, 1, 1, 1]
Output: false
Input: [0, 4, 22, 4, 14, 4, 2]
Output: true

Tags
array sorting Google  */

function WaveSorting(arr) { 

  // code goes here  
   let obj = {};                                                   // 1. Initiate hash map to store key-value pairs.                     
   let result = [];                                                // 2. Initiate empty array to hold formatted key-value pairs.


  arr.map(key => {(!obj[key])? obj[key] = 1 : obj[key]++});        // 3.add key to obj hash map.
         
      for(let value in obj){                                       // 4.add value to obj hash map.
         result.push(obj[value]); 
      }
      let maxNum = Math.max(...result);                            //  5. Find the maximum and compare with arr.length /2
      return (maxNum > arr.length / 2 ? false : true);             // 6. Return result, if maximum > arr.length / 2, false otherwise true.
}
// keep this function call here 
console.log(WaveSorting(readline()));
