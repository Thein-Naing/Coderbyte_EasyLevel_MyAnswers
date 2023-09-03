/* Letter Changes
Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm.
Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). 
Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.
Examples
Input: "hello*3"
Output: Ifmmp*3
Input: "fun times!"
Output: gvO Ujnft! */

function LetterChanges(str) { 

  // code goes here 
  /*1. define a str1 by using regex replace method with two argument: (1) regex for charCode a to y 
  with global flag g and i & (2) function with argument(a) which return  
  replacing "a" letter in the string with the letter following it in the alphabet 
  by using String.fromCharCode method and charCodrAt method...

The String.fromCharCode() method converts Unicode values to characters.
The String.fromCharCode() is a static method of the String object.
The syntax is always String.fromCharCode().

The charCodeAt() method returns the Unicode of the character at a specified index (position) in a string.
The index of the first character is 0, the second is 1, ....
The index of the last character is string length - 1 */

  //2A. we convert (Unicode value of ) letter "a" to (Unicode value of ) letter "b" by charCodeAt method ======> a.charCodeAt(0) + 1.
  //2B. then we covert (Unicode value of) letter "a" to character "a" by using String.fromCharCode method =====> String.fromCharCode(a.charCodeAt(0)+1)}) and return.
  
  str1 = str.replace(/[a-y]/gi, function(a){return String.fromCharCode(a.charCodeAt(0)+1)});

  //3. create str2 using regex replace method by replacing "z" with "a" from str1.
  str2 = str1.replace(/z/gi,"a");

  //4. then create str3 using regex replace method by replacing vowels by a function call with returning UpperCase vowels from str2.
  str3 = str2.replace(/a|e|i|o|u/gi, function(a){return a.toUpperCase()});

  //5.return str3;
  return str3; 
         
}
   
// keep this function call here 
LetterChanges(readline());
