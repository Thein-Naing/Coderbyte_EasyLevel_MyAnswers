/*Longest W
Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string. 
If there are two or more words that are the same length, return the first word from the string with that length. 
Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567" */


function LongestWord(sen) { 

  //1. use regex string.match method to return only characters a through z and 0 through 9, stripping away punctuation.
let arr = sen.match(/[a-z]+/gi);


  //2. sort the arr with a function(a, b) parameter which will compare each element with next element.
sortedArr = arr.sort(function((a, b) => {
  b.length > a.length 
});

  //3. Assuming there are two or more words that are the same length, return the first word from the string with that length.
return sortedArr[0];

// keep this function call here 
LongestWord(readline());
