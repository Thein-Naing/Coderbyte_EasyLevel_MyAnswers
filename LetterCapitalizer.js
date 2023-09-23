/*Letter Capitalize

Have the function LetterCapitalize(str) take the str parameter being passed and 
capitalize the first letter of each word. Words will be separated by only one space. */

function LetterCapitalize(str) { 
// code goes here  
  
  /*1.split the given string into an array of strings and
     make one space between double quoations marks whenever a blank space is encountered */
  
  let words = str.split(" "); 

  /*2.loop through each element of the array and capitalize the first letter.
2A.use substr method for remaining words e.g =====>  ello from hello.
The substr() method extracts a part of a string.
The substr() method begins at a specified position, and returns a specified number of characters.
The substr() method does not change the original string.
To extract characters from the end of the string, use a negative start position.*/

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1)
  }
 //3. rejoin the modified array of words as a string  with one space between double quoations marks for breaking between words.and return it.

  return words.join(" "); 
}
// keep this function call here 
console.log(LetterCapitalize(readline()));
