 let letters = []; //1.define an empty array to store each letter.
 let word = "racecar"; //2.declare given word to check
 let reverseWord = '';  //3.define reverseWord variable as a empty string initially


//4.loop through given word and return reverseWord 
 for (let i = 0; i < word.length; i++) {
//5.
 reverseWord += letters.pop(letters.push(word[i]));
 }
 

  reverseWord === word ?  console.log(word + ' is a palindrome') : console.log( word + ' is not a palindrome');

