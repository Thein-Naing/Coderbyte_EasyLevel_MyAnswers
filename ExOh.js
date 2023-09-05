/* Ex Oh

Have the function ExOh(str) take the str parameter being passed and return the string true 
if there is an equal number of x's and o's, otherwise return the string false.
Only these two letters will be entered in the string, no punctuation or numbers. For example: 
if str is "xooxxxxooxo" then the output should return false because there are 6 x's and 5 o's. */


function ExOh(str) { 

  // code goes here  
  
  //1. find the quantity of "x" in string by spliting "x" only in str.
  //2. then find the quantity of "o" in string by spliting "o" only in str.
  /*3. then return by assuming above two results are equal 
  and if yes outcome will true otherwise false. */

  return str.split(/x/i).length === str.split(/o/i).length;

}
// keep this function call here 
console.log(ExOh(readline()));
