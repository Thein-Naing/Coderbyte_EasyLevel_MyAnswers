/* GCF(greatest common factor)
Have the function GCF(arr) take the array of numbers stored in arr which will always contain only two positive integers, and return the greatest common factor of them.
For example: if arr is [45, 12] then your program should return 3. There will always be two elements in the array and they will be positive integers.

Examples
Input: [1, 6]
Output: 1
Input: [12, 28]
Output: 4
Tags
array searching math fundamentals */

function GCF(arr) { 
 
  // code goes here  
 let num = 1;
 for (let i = 1; i <= arr[0]; i++) { 
    if (arr[0] % i === 0  && arr[1] % i === 0) {
       num = i
    }
  }
 return num;
}

// keep this function call here 
console.log(GCF(readline()));

