/* easy
String Changes
Have the function StringChanges(str) take the str parameter being passed, which will be a string containing letters from the alphabet, and return a new string based on the following rules.
Whenever a capital M is encountered, duplicate the previous character (then remove the M), and whenever a capital N is encountered remove the next character from the string (then remove the N). 
All other characters in the string will be lowercase letters. For example: "abcNdgM" should return "abcgg". The final string will never be empty.

Examples
Input: "MrtyNNgMM"
Output: rtyggg
Input: "oMoMkkNrrN"
Output: ooookkr

Tags
string manipulation regular expression */


function StringChanges(str) { 

  // code goes here  
  str = str.split("");
  for (let i = 0; i < str.length; i++) {
      if(str[i] === "M") {
        str[i] = str[i-1]
    } else if (str[i] === "N") {
        str[i] = str[i+1] = "";       
      }
    }
  
     return str.join("");
}
   
// keep this function call here 
console.log(StringChanges(readline()));
