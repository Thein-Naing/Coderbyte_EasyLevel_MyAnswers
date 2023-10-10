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
 let GCF = 1;                                                  // 1. initial value of GCF number shall be 1.
 for (let i = 1; i <= arr[0]; i++) {                           // 2. use For Loop(for iterating each every integer of given arr to get desired condition).
    if (arr[0] % i === 0  && arr[1] % i === 0) {               // 3. desired condtion === every number in array must be divisible by i where value of i starting from 1.
       GCF = i                                                 // 4. if desired conditions are met, then GCF will be equal to this interger i.     
    }
  }
 return GCF;                                                   // 5. return GCF.
}

// keep this function call here 
console.log(GCF(readline()));

