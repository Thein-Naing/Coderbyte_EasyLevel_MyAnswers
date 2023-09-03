/*Longest W
Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string. 
If there are two or more words that are the same length, return the first word from the string with that length. 
Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567" */


function LongestWord(sen) { 

let arr = sen.match(/[a-z]+/gi);

sortedArr = arr.sort(function((a, b) => {
  b.length > a.length 
});

retirn sortedArr[0];

// keep this function call here 
LongestWord(readline());
