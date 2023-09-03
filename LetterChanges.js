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

  //1. create three strings; alphatStr for alphabet letters, newStr for modified alphatStr and finalStr for solution.
    let alphatStr = "abcdefghijklmnopqrstuvwxyz";
    let newStr = "bcdEfghIjklmnOpqrstUvwxyzA";
    let finalStr = "";

  //2. loop through alphatStr and check the index of str[i] and return finalStr .
  /* 3.The charAt() method returns the character at a specified index (position) in a string.
      The index of the first character is 0, the second 1, and so on ... */
  
    for (i = 0; i < str.length; i++) {
    
  //4. find the index of str[1] and if it is !== -1, then  =====>  finalStr = finalStr + newStr.charAt(alphatStr.indexOf(str[i]));
      
        if (alphatStr.indexOf(str[i]) !== -1) { 
          
 //5. e.g. alphatStr.indexOf(str[b]) = 1; then =====>  finalStr = finalStr + "bcdEfghIjklmnOpqrstUvwxyzA".charAt(1);
          
          finalStr += newStr.charAt(alphatStr.indexOf(str[i]));
          
        } else {
            finalStr += str[i]; 
    }
  //6. return finalStr;
  
    return finalStr;
}
   
// keep this function call here 
LetterChanges(readline());

   
