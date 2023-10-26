/* Bitwise Two
Have the function BitwiseTwo(strArr) take the array of strings stored in strArr, which will only contain two strings of equal length that represent binary numbers, 
and return a final binary string that performed the bitwise AND operation on both strings. 
A bitwise AND operation places a 1 in the new string where there is a 1 in both locations in the binary strings, otherwise it places a 0 in that spot.
For example: if strArr is ["10111", "01101"] then your program should return the string "00101"

Examples
Input: ["100", "000"]
Output: 000
Input: ["10100", "11100"]
Output: 10100

Tags
array searching bitwise operation    */

function BitwiseTwo(strArr) { 

  // code goes here  

    let result = "";                                        // 1.Initial state of result shall be empty string.

    for (let i = 0; i < strArr[0].length; i++) {            // 2.Loop throuh arr1 to check each every character in arr1 and arr2 are defined a 1 in both locations or not.
    if (strArr[0][i] === "1" && strArr[1][i] === "1") {
       result  += "1"                                       // 3.If say so, then update the result by incrementing "1". 
        } else {
            result += "0"                                   // 4.Otherwise update the result by incrementing "0".
        }                                                         
    }
          return result;                                    // 5.Return the result.
}
   
// keep this function call here 
console.log(BitwiseTwo(readline()));
