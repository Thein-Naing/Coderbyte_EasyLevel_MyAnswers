/* Largest Four

Have the function LargestFour(arr) take the array of integers stored in arr, and find the four largest elements and return their sum. 
For example: if arr is [4, 5, -2, 3, 1, 2, 6, 6] then the four largest elements in this array are 6, 6, 4, and 5 and
the total sum of these numbers is 21, so your program should return 21. 
If there are less than four numbers in the array your program should return the sum of all the numbers in the array. */

function LargestFour(arr) { 
  // code goes here  
  
  // 1.initialize state with arr.length <= 0;
  let sum = 0; 

  //2. if arr.length < 4 ; calculate the sume of this numbers in array by using for loop.
  if( arr.length < 4) {
   for( let i = 0; i < arr.length; i++) {
     sum += arr[i];  
   }
   return sum; //2A. then return sum.
  }
  /*3A. to get four largest numbers, firstly sort the given arr. 
   arr.sort method always return comparing every element with next element.
   3B. then use arr.slice method to get first four numbers of sorted array.
   3C. then use arr.reduce method to get the sum of these four numbers and return it. */

  return  sum += arr.sort((a,b) => b -a ).slice(0, 4).reduce((a,b) => a +b);
 }
   
// keep this function call here 
console.log(LargestFour(readline()));
