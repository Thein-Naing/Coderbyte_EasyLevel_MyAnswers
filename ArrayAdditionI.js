/* Array Addition I

Have the function ArrayAdditionI(arr) take the array of numbers stored in arr and return the string true if any combination of numbers in the array
(excluding the largest number) can be added up to equal the largest number in the array, otherwise return the string false.
For example: if arr contains [4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 = 23.
The array will not be empty, will not contain all the same elements, and may contain negative numbers. */

function ArrayAdditionI(arr) {  
 
/* 1. Take out the largest number from arr using arr.sort and arr.pop method and store as largestNum variable.
      arr.sort() method always return a funtion with compare element to next element.
      arr.pop() method removes the last element from an array and returns that element.  */

  let largestNum = arr.sort((a,b) => a - b).pop();

  //2. initial state for sum of all numbers except largest number shall be "zero".
  let sum = 0;
    

  /* 3. use for loop. the outer loop goes through each every number in the array and update the sum. */
    for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; 

  /* 4. the inner loop adds all the other numbers in the array and then compares the sum to the largest number. 
        if result is equal to largest number then return true otherwise return false. */

  // 5.for arr contains only positive numbers
    for (let j = 1; j < arr.length; j++) {
      if (j != i) {        
        sum += arr[j];   

  //5A. then compare the sum to the largestNum 
         if (sum === largestNum) {
          return true;
        }
      }
    }
      
      // 6. for arr contains positive numbers with negative numbers
     for (let k = 0; k < arr.length; k++) {
      if (i != k) {
        sum -= arr[k];

     // 6A. then compare the sum to the largestNum 
        if (sum === largestNum) {
          return true;
        }
      }
    }
    //7. compares the sum to default value assuming arr is empty, then
    sum = 0;
  }
    // 8. but the array will not be empty in given question. so return false.
  return false;  
         
}
  
ArrayAdditionI(readline());;
