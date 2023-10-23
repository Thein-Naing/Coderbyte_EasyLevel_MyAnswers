/* Hamming Distance
Have the function HammingDistance(strArr) take the array of strings stored in strArr, which will only contain two strings of equal length and return the Hamming distance between them. 
The Hamming distance is the number of positions where the corresponding characters are different.
For example: if strArr is ["coder", "codec"] then your program should return 1. 
The string will always be of equal length and will only contain lowercase characters from the alphabet and numbers.

Examples
Input: ["10011", "10100"]
Output: 3
Input: ["helloworld", "worldhello"]
Output: 8

Tags
array searching Facebook Flutter */

function HammingDistance(strArr) { 

  // code goes here  
 let count = 0;                                               // 1. Initial state of count shall be "zero".
    
    for (let i = 0; i < strArr[0].length; i++) {              // 2.Loop through each every character of the words and check to see if each corresponding character from both words matches up.
                                                              // 3. Given Statement: Both words string will always equal length. So we don't need nested loop.
     if (strArr[0][i] !== strArr[1][i]) {                     // 3. If each corresponding character from both words are not matched, then update the count.
            count += 1;
        }
    }
    
  return count;                                              // 4. Return count.
    
}
   
// keep this function call here 
console.log(HammingDistance(readline()));
