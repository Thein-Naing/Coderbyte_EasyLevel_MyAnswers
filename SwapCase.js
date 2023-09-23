/* Swap Case

Have the function SwapCase(str) take the str parameter and swap the case of each character. 
For example: if str is "Hello World" the output should be hELLO wORLD. Let numbers and symbols stay the way they are.  */

function SwapCase(str) { 

  // code goes here  

  // 1. divides the string into an ordered list of words using str.split method.
  
  let words = str.split('');
  
  // 2. loop through the words array swapping each letter in words.
  // 3. if letter is not lowercase then change to lower case.
  // 4. if letter is not upper case then change to upper case.
  // 5. rejoin the modified array of words as a string and return it.

  for (let i = 0; i < words.length; i++) {

    if (words[i] !== words[i].toLowerCase()) {    

        words[i] = words[i].toLowerCase();       

    } else if (words[i] !== words[i].toUpperCase()) {
    
        words[i] = words[i].toUpperCase();
        
    }
           
  }

  return words.join("");
}
   
// keep this function call here 
console.log(SwapCase(readline()));
