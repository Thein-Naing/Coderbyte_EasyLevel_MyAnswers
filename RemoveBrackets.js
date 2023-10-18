/* Remove Brackets
Have the function RemoveBrackets(str) take the str parameter being passed, which will contain only the characters "(" and ")", and determine the minimum number of brackets that need to be removed to create a string of correctly matched brackets.
For example: if str is "(()))" then your program should return the number 1. 
The answer could potentially be 0, and there will always be at least one set of matching brackets in the string.

Examples
Input: "(())()((("
Output: 3
Input: "(()("
Output: 2

Tags
string manipulation searching Facebook recursion Flutter */

function RemoveBrackets(str) { 

  // code goes here  
   let count = 0;                                  // 1. Initial state of count for brackets that need to be removed shall be "zero"(Meaning: all brackets are correctly matched initially).
                                                   // Given Statement: determine the minimum number of brackets that need to be removed to create a string of correctly matched brackets
  for (let i = 0; i < str.length; i++) {           // 2. Use For Loop to iterate through each every characters of given str to check which type of bracket is not correctly matched.
    if (str[i] === "(") {                          // 3. If unmatched character is "(" , then update count.(Meaning: count the open brackets.)
      count += 1;
    } else if (str[i] === ")" && count === 0) {    /* 4. Given Statement: The answer could potentially be 0, and there will always be at least one set of matching brackets in the string.
                                                         If this statement is true(Meaning: count === 0) and unmatched character is ")", then update count.(Meaning: count the close brackets.) */   
      count += 1;                                            
    } else {                                       // 5. Otherwise decrement the count.
      count -= 1;
    }
  }
  return count;                                    // 6. Return count.
}
   
// keep this function call here 
console.log(RemoveBrackets(readline()));
