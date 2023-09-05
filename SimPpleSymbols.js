/*Simple Symbols

Have the function SimpleSymbols(str) take the str parameter being passed and determine if it is an acceptable sequence
by either returning the string true or false. The str parameter will be composed of + and = symbols with several characters
between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol. 
So the string to the left would be false. The string will not be empty and will have at least one letter. */




function SimpleSymbols(str) { 

  // code goes here  
  //1. loop through index of i from i = 0.
   for (let i = 0; i < str.length; i++) {
  

  //2. use reges str.match to match all characters from a to z with flag global and flag i.
  if (str[i].match(/[a-z]/gi)) {

 //3. use another if statement for sorrounding with "+" sign. use && operator for backward and forward cases.
  if (str[i+1] === "+"  && str[i-1] === "+") {

    //4. return true otherwise return false.
  return true; 

      } else {

     return false;
      }
    }
  }
}
// keep this function call here 
console.log(SimpleSymbols(readline()));
