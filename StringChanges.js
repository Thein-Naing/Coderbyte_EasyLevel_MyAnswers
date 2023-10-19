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
  str = str.split("");                           // 1. Divide the given string into an ordered array of characters using arr.split(" ") method.
  for (let i = 0; i < str.length; i++) {         // 2. Use For Loop to iterate through each every characters of given str to check "M" or "N" is in the str.
      if(str[i] === "M") {                       /* 3. Given Statement: Whenever a capital M is encountered, duplicate the previous character (then remove the M). 
                                                       We will return value of str[i] is equal to value of str[i-1], Meaning: duplicate the previous character(str[i-1]. */
        str[i] = str[i-1]
    } else if (str[i] === "N") {                 /* 4. Given Statement: whenever a capital N is encountered remove the next character from the string (then remove the N). 
                                                       We will return value of str[i] and str[i+1] as empty string, Meaning: there is no more str[i] and str[i+1] in str */
        str[i] = str[i+1] = "";       
      }
    }
  
     return str.join("");                        // 5. Rejoin and return str.
}
   
// keep this function call here 
console.log(StringChanges(readline()));
