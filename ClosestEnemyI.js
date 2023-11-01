/* 
easy
Closest Enemy
Have the function ClosestEnemy(arr) take the array of numbers stored in arr and from the position in the array where a 1 is, 
return the number of spaces either left or right you must move to reach an enemy which is represented by a 2.
For example: if arr is [0, 0, 1, 0, 0, 2, 0, 2] then your program should return 3 because the closest enemy (2) is 3 spaces away from the 1.
The array will contain any number of 0's and 2's, but only a single 1. It may not contain any 2's at all as well, where in that case your program should return a 0.

Examples
Input: [1, 0, 0, 0, 2, 2, 2]
Output: 4
Input: [2, 0, 0, 0, 2, 2, 1, 0]
Output: 1

Tags
array searching */

Notes: /* findIndex() method: which allows you to find the first element in an array that satisfies a provided testing function.
          The following example returns the index of the first occurrence of the number 2 in the positionss array:
                  let positions = [1, 5, 2, 8, 10, 2];
                  let index = positions.findIndex(position => position === 2);
                  console.log(index);
                  Output: 2    */

function ClosestEnemy(arr) { 

  // code goes here  

if (!arr.includes(2)) {                                                                       // 1. Return 0 if there is no 2(enemy) in the array.
return 0;
  }
let range = arr.findIndex(location => {                                                       // 2. Find the coordinates(location) of the 1(soldier)
return location === 1;
  });
for (let i = 1; i <arr.length; i++) {                                                         // 3.Find the paths to 2(enemy) from soldier, left or right.
if (arr[range + i] === 2 || arr[range - i] === 2) {
return i;                                                                                     // 4.If fount index of path from range, return  i.
    }
  }
return range;                                                                                 // 5. return range.
  
}
console.log(ClosestEnemy(readline()));
