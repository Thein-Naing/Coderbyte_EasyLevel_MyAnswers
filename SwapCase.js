/* Swap Case

Have the function SwapCase(str) take the str parameter and swap the case of each character. 
For example: if str is "Hello World" the output should be hELLO wORLD. Let numbers and symbols stay the way they are.  */

function SwapCase(str) { 

  // code goes here  

  // 1. divide the string into an ordered list of words using str.split method.
  
  let words = str.split('');
  
  // 2. loop through the words array for swapping each every character in word.
  // 3. if character of word is not lowercase then change to lower case.
  // 4. else character of word is not upper case and then change to upper case.
  // 5. rejoin the modified array of words as a string and return it.

  for (let i = 0; i < words.length; i++) {
    if (words[i] !== words[i].toLowerCase()) {  
        words[i] = words[i].toLowerCase();      
    } else {
        words[i] = words[i].toUpperCase();
           }
    }
  return words.join("");
}
   
// keep this function call here 
console.log(SwapCase(readline()));
