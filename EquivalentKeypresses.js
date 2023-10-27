/*
Equivalent Keypresses
Have the function EquivalentKeypresses(strArr) read the array of strings stored in strArr which will contain 2 strings representing two comma separated lists of keypresses.
Your goal is to return the string true if the keypresses produce the same printable string and the string false if they do not. 
A keypress can be either a printable character or a backspace represented by -B. 
You can produce a printable string from such a string of keypresses by having backspaces erase one preceding character.
Examples
Input: ["a,b,c,d", "a,b,c,d,-B,d"]
Output: true
Input: ["c,a,r,d", "c,a,-B,r,d"]
Output: false

Tags
array Google */

function EquivalentKeypresses(strArr) { 

  // code goes here  

    /* 1. Extract letters arr1 and arr2 from given strArr using arr.split(",") method which converts a string to array.
       2. Define stacks to hold letters from arr1 and arr2.
       3. Use arr.map() method with single argument(character = char) and we will modify each letter in arr1 and arr2. 
       4. If character is equal to "-B" then we will delete the last letter of arr otherwise we will add this character to stack.
       5. Make if else statement by chaining arr.map() call with str.pop(), str.push() and ternary operator.
       6. Rejoin anfd retrun letters stacks. If strA and strB are equal, the return true, otherwise return false. */
  
  const arr1 = strArr[0].split(",");      // console.log(arr1);  // ['a', 'b', 'c', 'd']
  const arr2 = strArr[1].split(",");      // console.log(arr2); // ['a', 'b', 'c', 'd', '-B', 'd']
  const  strA = [];
  const  strB = [];

  arr1.map(char => char === "-B" ? strA.pop() : strA.push(char));  
  arr2.map(char => char === "-B" ? strB.pop() : strB.push(char)); 
  return strA.join() === strB.join();

}
   
// keep this function call here 
console.log(EquivalentKeypresses(readline()));
