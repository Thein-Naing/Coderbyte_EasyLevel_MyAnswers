Palindrome
HIDE QUESTION
Have the function Palindrome(str) take the str parameter being passed and 
 return the string true if the parameter is a palindrome, 
 (the string is the same forward as it is backward) otherwise return the string false. 
 For example: "racecar" is also "racecar" backwards.
 Punctuation and numbers will not be part of the string.
  `Difficulty Level : Easy`




let letters = []; //1.define an empty array to store each letter of given word.
 let word = "racecar"; //2.declare given word to check.
 let reverseWord = '';  //3.define reverseWord variable as a empty string initially.


//4.loop through given word 
 for (let i = 0; i < word.length; i++) {
//5. Then add each letter of word into letters array. // letters.push(word[i]);
//6. Then take out each letter of word in reverse order and add into letters array. // reverseWord = reverseWord + letters.pop(); 
 reverseWord += letters.pop(letters.push(word[i])); //7. reverseWord = reverseWord + letters.pop(letters.push(word[i]));
 }
 
//8. Use ternary operator to check result of reverseWord is equal to word.
  reverseWord === word ?  console.log(word + ' is a palindrome') : console.log( word + ' is not a palindrome');

