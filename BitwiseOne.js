/* Bitwise One
Have the function BitwiseOne(strArr) take the array of strings stored in strArr, which will only contain two strings of equal length that represent binary numbers, and return a final binary string that performed the bitwise OR operation on both strings. 
A bitwise OR operation places a 0 in the new string where there are zeroes in both binary strings, otherwise it places a 1 in that spot.
For example: if strArr is ["1001", "0100"] then your program should return the string "1101"

Examples
Input: ["100", "000"]
Output: 100
Input: ["00011", "01010"]
Output: 01011
Tags
array searching bitwise operation  */

// Note. Same solution as Bitwise Two challenge.

function BitwiseOne(strArr) { 

  // code goes here  

    let result = "";                                        // 1.Initial state of result shall be empty string.

    for (let i = 0; i < strArr[0].length; i++) {            // 2.Loop throuh arr1 to check each every character in arr1 and arr2 are defined a "0" in both locations or not.
    if (strArr[0][i] === "0" && strArr[1][i] === "0") {
       result  += "0"                                       // 3.If say so, then update the result by incrementing "0". 
        } else {
            result += "1"                                   // 4.Otherwise update the result by incrementing "1".
        }                                                         
    }
          return result;                                    // 5.Return the result.
}
   
// keep this function call here 
console.log(BitwiseOne(readline()));
