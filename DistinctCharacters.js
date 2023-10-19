/* Distinct Characters
Have the function DistinctCharacters(str) take the str parameter being passed and determine if it contains at least 10 distinct characters, if so, then your program should return the string true, otherwise it should return the string false. 
For example: if str is "abc123kkmmmm?" then your program should return the string false because this string contains only 9 distinct characters: a, b, c, 1, 2, 3, k, m, ? adds up to 9.

Examples
Input: "12334bbmma:=6"
Output: true
Input: "eeeemmmmmmmmm1000"
Output: false

Tags
string manipulation searching */

function DistinctCharacters(str) { 

  // code goes here  

  let result = [];                                  // 1. Initial state of result shall be empty stack.

  for (let i =0; i < str.length; i++) {             // 2. Use For Loop to iterate through each every characters of given str to check if there is a repeated characters in the result stack.

    if (!result.includes(str.charAt(i))) {          // 3. If there is a same character as str.charAt[i]  in the stack, we will not add this character to stack. If not so, then we will add this character to stack by using arr.push() method.
        result.push(str.charAt(i));
    }  
    
  }
    return result.length > 9 ? true : false;       //  4. Return if stack.length contains at least 10 distinct characters, if so, then return the string true, otherwise return the string false.
}
   
// keep this function call here 
console.log(DistinctCharacters(readline()));
