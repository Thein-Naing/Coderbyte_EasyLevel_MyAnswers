function ArrayAdditionI(arr) {  
 
/* 1. Take out the largest number from arr using 
.sort and .pop method and  store as largestNum variable.
sort() method always return a funtion with compare element to next element.
pop() method removes the last element from an array and returns that element */

  let largestNum = arr.sort(function(a,b){return a - b}).pop();

  //2. declare initial state for sum of all numbers except largestNum shall be "zero".
  let sum = 0;
    

  /* 3 .the outer loop goes through every number in the array */
    for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; 

  /* 4. the inner loop adds all the other numbers in the array and 
    then compares the total to the largest number . If match is     
   found then return true else return false. */

  // 5.for arr contains only positive numbers
    for (let j = 0; j < arr.length; j++) {
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

     //6A. then compare the sum to the largestNum 
        if (sum === largestNum) {
          return true;
        }
      }
    }
    //7. compares the sum to default value = 0. But the array will not be empty.
    sum = 0;
  }
    // 8. but the array will not be empty in given question. so return false.
  return false;  
         
}
  
ArrayAdditionI(readline());;