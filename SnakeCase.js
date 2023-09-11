/*  Snake Case

Have the function SnakeCase(str) take the str parameter being passed and return it in proper snake case format
where each word is lowercased and separated from adjacent words via an underscore. 
The string will only contain letters and some combination of delimiter punctuation characters separating each word.

For example: if str is "BOB loves-coding" then your program should return the string bob_loves_coding.   */


function SnakeCase(str) { 

  // code goes here  

  /* 1. convert  str to lowerCase words 
  2. then use arr.replace method together with regex.
  3.  /\w/ === Any non-word character in regex with global flag g.
  4. and replace  them with _ .method and return it. */

  return str.toLowerCase().replace(/\W/g, "_");
 
}
   
// keep this function call here 
console.log(SnakeCase(readline()));
