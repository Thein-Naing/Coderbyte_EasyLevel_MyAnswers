Palindrome
Have the function Palindrome(str) take the str parameter being passed and 
 return the string true if the parameter is a palindrome, 
 (the string is the same forward as it is backward) otherwise return the string false. 
 For example: "racecar" is also "racecar" backwards.
 Punctuation and numbers will not be part of the string.
 Difficulty Level : Easy

function Palindrome(str) { 
  // code goes here  
  //1. split the str into letters of word and join back and convert to lower case .
  str = str.split("").join("").toLowerCase();
  //2. create reverseStr, split the converted lower case str,reverse and join back.
  reverseStr = str.split("").reverse().join("");
  //3. return reverseStr === str;
  return reverseStr === str;
}
   // keep this function call here 
console.log(Palindrome(readline()));


 # OR you can skip one step;

function Palindrome(str) { 
   str = str.split("").join("").toLowerCase();
return reverseStr = str.split("").reverse().join("");
}
console.log(Palindrome(readline()));




