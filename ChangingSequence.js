/* Changing Sequence
Have the function ChangingSequence(arr) take the array of numbers stored in arr and return the index at which the numbers stop increasing and
begin decreasing or stop decreasing and begin increasing. 
For example: if arr is [1, 2, 4, 6, 4, 3, 1] then your program should return 3 because 6 is the last point in the array where the numbers were increasing and 
the next number begins a decreasing sequence.
The array will contain at least 3 numbers and it may contains only a single sequence, increasing or decreasing. 
If there is only a single sequence in the array, then your program should return -1. 
Indexing should begin with 0.

Examples
Input: [-4, -2, 9, 10]
Output: -1
Input: [5, 4, 3, 2, 10, 11]
Output: 3

Tags
array searching */


function ChangingSequence(arr) {
       // code goes here
  // 1. loop through the each every character of the array and to find increasing and decreasing patterns to determine index of i.
  // 2. check if the pattern match increasing pattern: arr[i-1] < arr[i] && arr[i+1] < arr[i]  === 4,6,4 in  array[1, 2, 4, 6, 4, 3, 1] and here i - 1 = 4, i + 1 = 4, i = 6.
  // 3. check if the pattern match decreasing pattern: arr[i-1] > arr[i] && arr[i+1] > arr[i]  === 3,2,10 in array[5, 4, 3, 2, 10, 11] and here  i - 1 = 3, i + 1 = 10, i = 2.

  for (i = 0; i < arr.length; i++) {
    if ((arr[i - 1] < arr[i] && arr[i + 1] < arr[i]) || (arr[i - 1] > arr[i] && arr[i + 1] > arr[i]))
      return i;        // 4. If patterns are match with given statement, then return the index .
  }
  return -1;           // 5. Otherwise return -1.
}

console.log(ChangingSequence(arr));
// keep this function call here
//   console.log(ChangingSequence(readline()));
