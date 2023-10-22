/* Off Line Minimum
Have the function OffLineMinimum(strArr) take the strArr parameter being passed which will be an array of integers ranging from 1...n and the letter "E" and 
return the correct subset based on the following rules. 
The input will be in the following format: ["I","I","E","I",...,"E",...,"I"] where the I's stand for integers 
and the E means take out the smallest integer currently in the whole set.
When finished, your program should return that new set with integers separated by commas.

For example: if strArr is ["5","4","6","E","1","7","E","E","3","2"] then your program should return 4,1,5.

Examples
Input: ["1","2","E","E","3"]
Output: 1,2
Input: ["4","E","1","E","2","E","3","E"]
Output: 4,1,2,3

Tags
array searching sorting  */

function OffLineMinimum(strArr) {
  // code goes here
  let stack = [];                                   // 1. Define a stack to store only the smallest integers.
  let integers = [];                                  // 2. Define an empty array to store all integers as we loop through array.

  for (let i = 0; i < strArr.length; i++) {         // 3. Use For Loop to iterate through each every charater of array to check if it is an integer or an "E".      
       
    if (strArr[i] !== "E") {                        // 4. If an integer is encountered, then store it in integers array.
        integers.push(strArr[i]);
      
    } else {                                        // 5. If an E is encountered, then remove the smallest integer from integers array and store it in the stack.
        stack.push(integers.sort((a, b) => b - a).pop());
    }
  }

  return stack.join(",");                           // 6. Rejoin and return the stack.
}

// keep this function call here
  console.log(OffLineMinimum(readline()));
