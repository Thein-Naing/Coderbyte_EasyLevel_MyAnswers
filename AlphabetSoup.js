/* Alphabet Soup
Have the function AlphabetSoup(str) take the str string parameter being passed and
return the string with the letters in alphabetical order (ie. hello becomes ehllo).
Assume numbers and punctuation symbols will not be included in the string. */



function AlphabetSoup(str) { 

  // code goes here 
  /*1. split the string with  single/double quotation marks and 
  sort and join back with single/double quotation marks and return it.*/
  
 return str.split("").sort().join("");


}
   
// keep this function call here 
console.log(AlphabetSoup(readline()));
