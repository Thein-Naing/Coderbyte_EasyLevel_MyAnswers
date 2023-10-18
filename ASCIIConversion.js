/*ASCII Conversion
Have the function ASCIIConversion(str) take the str parameter being passed and return a new string where every character, aside from the space character, is replaced with its corresponding decimal character code. 
For example: if str is "dog" then your program should return the string 100111103 because d = 100, o = 111, g = 103.

Examples
Input: "hello world"
Output: 104101108108111 119111114108100
Input: "abc **"
Output: 979899 4242

Tags
string manipulation regular expression back-end mobile Android iOS  */

function ASCIIConversion(str) { 

  // code goes here  
  let result = [];                                // 1. Initial state of result shalee be empty stack.

    for(let i = 0; i < str.length; i++){          // 2. Use For Loop to iterate through each every characters including white space to check  it is a character.
        if(str.charAt(i) !== " "){
            result.push(str.charCodeAt(i));       // 3. If character is not a white space, then there is a character and add it's character code value to stack using charCodeAt() & arr.push() methods.
        } else {                           
            result.push(" ");                     // 4. Otherwise there will be a white space and add a white to stack.
        }    
    }
  // code goes here  
  return result.join("")                          // 5. Retirn result stack.
         
}
   
// keep this function call here 
console.log(ASCIIConversion(readline()));
