/* Array Matching
Have the function ArrayMatching(strArr) read the array of strings stored in strArr which will contain only two elements, both of which will represent an array of positive integers. 
For example: if strArr is ["[1, 2, 5, 6]", "[5, 2, 8, 11]"], then both elements in the input represent two integer arrays, and your goal for this challenge is to add the elements in corresponding locations from both arrays. 
For the example input, your program should do the following additions: [(1 + 5), (2 + 2), (5 + 8), (6 + 11)] which then equals [6, 4, 13, 17]. 
Your program should finally return this resulting array in a string format with each element separated by a hyphen: 6-4-13-17.

If the two arrays do not have the same amount of elements, then simply append the remaining elements onto the new array (example shown below). 
Both arrays will be in the format: [e1, e2, e3, ...] where at least one element will exist in each array.

Examples
Input: ["[5, 2, 3]", "[2, 2, 3, 10, 6]"]
Output: 7-4-6-10-6
Input: ["[1, 2, 1]", "[2, 1, 5, 2]"]
Output: 3-3-6-2

Tags
array */

function ArrayMatching(strArr) { 

  // code goes here  
let sum = [];                                                   	// 1. Initiate a stack to hold sum of elements.
let arr1 = strArr[0].match(/[0-9]+/gi);                            	// 2. Extract integer arr1 from given strArr using arr.match() with regex.
let arr2 = strArr[1].match(/[0-9]+/gi);                            	// 3. Extract integer arr2 from given strArr using arr.match() with regex.
let longest = Math.max(arr1.length, arr2.length);                  	// 4. Find longest arr of arr1 and arr2 using Math.max() method.

    for (var i = 0; i < longest; i++) {	                                // 5. Loop throuh longest arr to check each every character in arr1 and arr2 are defined or not.
	     if (arr1[i] === undefined ||  arr2[i] === undefined) {     // 6. If not so, then sum will be either digit of arr1 or arr2. 
       sum[i] = Number(arr1[i]) || Number(arr2[i]);
	  }  else {
       sum[i] = Number(arr1[i]) + Number(arr2[i]);                      // 7. Otherwise sum will be addition of each digit from arr1 and arr2. Use Number() method to get digits.
    }
  }
   return sum.join("-")                                                 // 8. Rejoin with ("-") and return it.
}
   
// keep this function call here 
console.log(ArrayMatching(readline()));
