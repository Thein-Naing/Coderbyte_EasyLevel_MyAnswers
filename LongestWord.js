/*Longest W
Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string. 
If there are two or more words that are the same length, return the first word from the string with that length. 
Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567" */

function LongestWord(sen) { 

  /* 1. use regex string.match method to return only characters a through z and 0 through 9, 
  stripping away punctuation. 

  2. use the arr.reduce method with (a, b) parameter which will compare each element with next element.

  3. Assuming there are two or more words that are the same length,
   return the first word from the string with that length. */

return sen.match(/[a-z0-9]+/gi).reduce((a,b) => a.length >= b.length ? a : b);

}

// keep this function call here 
LongestWord(readline());
