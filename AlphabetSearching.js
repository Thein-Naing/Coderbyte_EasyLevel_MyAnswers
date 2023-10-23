/* Alphabet Searching
Have the function AlphabetSearching(str) take the str parameter being passed and return the string true 
if every single letter of the English alphabet exists in the string, otherwise return the string false.
For example: if str is "zacxyjbbkfgtbhdaielqrm45pnsowtuv" then your program should return the string true 
because every character in the alphabet exists in this string even though some characters appear more than once.

Examples
Input: "abcdefghijklmnopqrstuvwxyyyy"
Output: false
Input: "abc123456kmo"
Output: false

Tags
string manipulation searching */

function AlphabetSearching(str) { 

   return str.match(/[a-z]/gi).filter((current, index) => str.indexOf(current) === index).length === 26 ? true : false;
  
// keep this function call here 
console.log(AlphabetSearching(readline()))


// ALternative method:

function AlphabetSearching(str) { 

  // code goes here  
    str = str.match(/[a-z]/gi);                                              // 1. Check each every character in given str exist in English alphabet using arr.match() method with regex( /[a-z]/).
    str = str.filter((current, index) => str.indexOf(current) === index);    /* 2. Use arr.filter() method to filter each every character with index and make sure index number of current character will be current index.
                                                                                   Meaning: We will count only one time for repeated characters  */
   
    return str.length === 26 ? true : false                                  // 3. If updated str length  is equal to 26, then true otherwise false and return str.
         
}
   
// keep this function call here 
console.log(AlphabetSearching(readline()))
