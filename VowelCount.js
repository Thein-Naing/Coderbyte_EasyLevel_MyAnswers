/*Vowel Count

Have the function VowelCount(str) take the str string parameter being passed and return the number of vowels the string contains 
(ie. "All cows eat grass and moo" would return 8). Do not count y as a vowel for this challenge. */

function VowelCount(str) { 

  // code goes here  
  //1. use regex str.match method to match vowels.
  //2. then find the length of vowel str and return.
  
   return str = str.match(/[a,e,i,o,u]/g).length 
  
}
   
// keep this function call here 
console.log(VowelCount(readline()));


//### Another method using for loop.

const vowels = ["a", "e", "i", "o", "u"]

function  VowelCount(str) {
      
    //1.Define vowels and initialize count
  
const vowels = ["a", "e", "i", "o", "u"]
    let count = 0;

    // 2.loop through string to test if each character is a vowel
    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }

    // 3.return number of vowels
    return count
}

// keep this function call here 
console.log(VowelCount(readline()))
