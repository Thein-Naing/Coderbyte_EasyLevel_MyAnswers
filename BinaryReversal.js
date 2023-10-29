/* easy
Binary Reversal
Have the function BinaryReversal(str) take the str parameter being passed, which will be a positive integer, take its binary representation (padded to the nearest N * 8 bits), reverse that string of bits, and then finally return the new reversed string in decimal form. 
For example: if str is "47" then the binary version of this integer is 101111 but we pad it to be 00101111. 
Your program should reverse this binary string which then becomes: 11110100 and then finally return the decimal version of this string, which is 244.

Examples
Input: "213"
Output: 171
Input: "4567"
Output: 60296

Tags
string manipulation */

function BinaryReversal(str) { 
  let binary = parseInt(str).toString(2).split("").reverse(); // 1. convert given int string to binary string, split it and reverse it.
  while(binary.length % 8 !== 0) {      /* 2. Add "0" into binary string to make blocks of 8 bits using While Loop. 
                                              Meaning: eg. for 11110100 , declare a condition, here is 8 bits, so binary.length must be divisible by 8).Otherwise add "0" to binary string.
    binary.push("0");                                   */
  }
    return  parseInt(binary.join(""),2);  // 3. Rejoin and convert binary string into int, then return it.
  }
   
// keep this function call here 
BinaryReversal(readline());
