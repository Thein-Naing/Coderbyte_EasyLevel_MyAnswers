/* Overlapping Ranges
Have the function OverlappingRanges(arr) take the array of numbers stored in arr which will contain 5 positive integers, the first two representing a range of numbers (a to b), 
the next 2 also representing another range of integers (c to d), and a final 5th element (x) which will also be a positive integer, 
and return the string true if both sets of ranges overlap by at least x numbers. 

For example: if arr is [4, 10, 2, 6, 3] then your program should return the string true. 
The first range of numbers are 4, 5, 6, 7, 8, 9, 10 and the second range of numbers are 2, 3, 4, 5, 6.
The last element in the array is 3, and there are 3 numbers that overlap between both ranges: 4, 5, and 6. 
If both ranges do not overlap by at least x numbers, then your program should return the string false.

Examples
Input: [5,11,1,5,1]
Output: true
Input: [1,8,2,4,4]
Output: false

Tags
array searching set theory */


function OverlappingRanges(arr) { 

  // code goes here                                            
   let count = 0;                                     // 1. Initial state of count for how many numbers overlap shall be "zero".    
                                                      /*    Given Statement:  array of numbers stored in arr which will contain 5 positive integers, 
                                                            the first two representing a range of numbers (a to b), the next 2 also representing another range of integers (c to d) and 
                                                            a final 5th element (x) which will also be a positive integer  */
  for (let i = arr[0]; i <= arr[1]; i++) {            // 2.  We shoul use nested array to loop through given ranges in arr to check overlapping numbers exist.
    for (let j = arr[2]; j <= arr[3]; j++) {
      if (i === j) {
        count += 1;                                   // 3. If overlapping numbers exist in given ranges of array, then update the count. Meaning: increment the count for overlapping numbers.
      }
    }
  }
  return count >= arr[4] ? true : false;             /*  4. Return the string true if both sets of ranges overlap by at least x numbers. 
                                                            Meaning: check if the numbers that overlap is equal to or greater than the last number(fifth element) in the array. 
                                                            Otherwise return the string false as per given statement. */
}
   
// keep this function call here 
console.log(OverlappingRanges(readline()));
