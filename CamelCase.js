/* Camel Case

Have the function CamelCase(str) take the str parameter being passed and return it in proper camel case format where the first letter of each word is capitalized (excluding the first letter).
The string will only contain letters and some combination of delimiter punctuation characters separating each word.

For example: if str is "BOB loves-coding" then your program should return the string bobLovesCoding. */

// Notes. if you can solve Different Cases challenge, you can solve this challenge.

/* 
  1. Convert given str to lowercase letters by using str.toLowercase() and remove any special characters between letters using str.replace method with regex 
     /\w/g === Any non-word character with global flag g ( non-word character === white space, -, e.t.c) and replace them with " "(one space between double qoatation marks).
     divide the given string into an ordered array of words using arr.split(" ") method and add an empty space between the parenthesis of the split()method.    
      
  2. Here str.length = 5 === "cats AND*Dogs-are Awesome" become "cats and dogs are awesome" after using str.toLowerCase().replace(/\W/g, " ").split(" ").
  3. We will leave first letter of word as lowercase and then using str.map() which will map through each every characters of second letter and
     convert first character of second letter(index (0) of second letter) to uppercase. 
     Then  use str.slice() method which will extract from index 1 of second letter to the end of the string.
  4. Rejoin letters using str.join() method and return it.    */

function CamelCase(str) { 

  // code goes here  
  
letters= str.toLowerCase().replace(/\W/g, " ").split(" ")
return letters[0] + (letters.slice(1).map(item => item[0].toUpperCase() + item.slice(1))).join('');
   
}
   
// keep this function call here 
console.log(CamelCase(readline()));
