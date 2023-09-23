/* Alphabet Soup
Have the function AlphabetSoup(str) take the str string parameter being passed and
return the string with the letters in alphabetical order (ie. hello becomes ehllo).
Assume numbers and punctuation symbols will not be included in the string. */



function AlphabetSoup(str) { 

  // code goes here 
  /*1. divide the string into an ordered list of letters using str.split, str.sort method and 
       rejoin the modified array of letters as a string and return it. */
  
 return str.split("").sort().join("");

}
   
// keep this function call here 
console.log(AlphabetSoup(readline()));
