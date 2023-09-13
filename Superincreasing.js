/* Superincreasing

Have the function Superincreasing(arr) take the array of numbers stored in arr and determine if the array forms a superincreasing sequence 
where each element in the array is greater than the sum of all previous elements. The array will only consist of positive integers.
For example: if arr is [1, 3, 6, 13, 54] then your program should return the string "true" because it forms a superincreasing sequence.
If a superincreasing sequence isn't formed, then your program should return the string "false" */

function Superincreasing(arr) { 

  // code goes here  
  //1. initial state of sum shall be "zero"
 let sum = 0;

/*2. loop through i and find value for sum. 
define if statement for sum which will satisfy false condition and then return false. */
  
  for(let i = 0; i < arr.length; i++) {
    if (sum >= arr[i]) {
    return false;          
     }    
    
//3. update sum with forming superincreasing sequence which is our desired result.
    
    sum += arr[i]   //3A. sum = sum + arr[i]
  }
  
  //4.  then return true.
   return true;
}
   
// keep this function call here 
console.log(Superincreasing(readline()));
