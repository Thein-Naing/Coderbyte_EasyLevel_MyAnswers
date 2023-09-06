/* Three Sum

Have the function ThreeSum(arr) take the array of integers stored in arr, and determine 
if any three distinct numbers (excluding the first element) in the array can sum up to the first element in the array. 
For example: if arr is [8, 2, 1, 4, 10, 5, -1, -1] then there are actually three sets of triplets that sum to the number 8: [2, 1, 5], [4, 5, -1] and [10, -1, -1]. Your program should return the string true if 3 distinct elements sum to the first element, 
otherwise your program should return the string false. The input array will always contain at least 4 elements. */ 

function ThreeSum(arr) {

    // code goes here  
    /*1. create an empty array to store results pair of numbers 
       which are sum up to first element in given array. */
    let stack = [];


    /* 2. This will be nested loop because  we have to check three numbers and compare their sum to firsr element.
     first, loop through each number in array except first element.*/

    for (let i = 1; i < arr.length; i++) {

        // 3. loop through each other numbers except first element.

        for (let j = i + 1; j < arr.length; j++) {

            //4. loop through next each another numbers except first element.

            for (let k = j + 1; k < arr.length; k++) {

                /* 4. check if sum of these three numbers equal to first element.
                 first element of given array should be arr[0] and if it is true, 
                 otherwise false. */

                if (arr[i] + arr[j] + arr[k] === arr[0]) {
                    return true;
                }

            }
        }
    }
    return false;

}

// keep this function call here 
console.log(ThreeSum(readline()));  //true.

//5 . for different VS code, replace 'readline' with actual array.
console.log(ThreeSum([8, 2, 1, 4, 10, 5, -1, -1] )); // true.
