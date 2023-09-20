/*  Codeland Username Validation

Have the function CodelandUsernameValidation(str) take the str parameter being passed and determine if the string is a valid username according to the following rules:

1. The username is between 4 and 25 characters.
2. It must start with a letter.
3. It can only contain letters, numbers, and the underscore character.
4. It cannot end with an underscore character.

If the username is valid then your program should return the string true, otherwise return the string false.   */

function CodelandUsernameValidation(str) { 

  // code goes here  
  
  /* 1. the username is between 4 and 25 characters.  
       so  username === str.length >= 4 && str.length <= 25 

     2. it must start with a letter. 
        so create firstCharacter as a letter : firstChar = str.charAt(0)   

     3. it can only contain letters, numbers, and the underscore character. 
        so create regex: str === str.match("^[a-zA-Z0-9_]*$") 

     4. it cannot end with an underscore character 
        so  create regex: !lastChar.match(/_/gi))  */

  let firstChar = str.charAt(0);     
  let lastChar = str.charAt(str.length -1);


if ((str.length >= 4 && str.length <= 25) && ( firstChar.match(/[a-z]/gi)) &&
 (str.match("^[a-zA-Z0-9_]*$")) && (!lastChar.match(/_/gi))) {

   str = true;                 // 5. if all requirements are met, return str true.

 } else {

str = false;                   // 6. else return str false.

}
   return str;                 // 7. otherwise return str.
}

// keep this function call here 
console.log(CodelandUsernameValidation(readline()));
