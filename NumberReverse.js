/* Number Reverse

Have the function NumberReverse(str) take the str parameter being passed which will be a string of numbers, and
return a new string with the numbers in reverse order.  */


function NumberReverse(str) { 

  // code goes here  
  return str.split(" ").reverse().join(" ");   // 1 .  split the given string , reverse, rejoin and return it.
                                               // 2. use string concatenation and make a space between "" double quoation marks when using arr.split and arr.join method.


}
   
// keep this function call here 
console.log(NumberReverse(readline()));
