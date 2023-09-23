/* CheckNums
Have the function CheckNums(num1,num2) take both parameters being passed and return the string true
if num2 is greater than num1, otherwise return the string false. 
If the parameter values are equal to each other then return the string -1. */

function CheckNums(num1,num2) { 

  // code goes here  

  // 1. if num2 is greater than num1, return the string true.
  // 2. if num2 is greater than num1, return the string false. 
  // 3. If the parameter values are equal to each other ( meaning: num1 = num2) then return the string -1.
  // 4. use ternary operator and return it.

    return  num2 === num1 ? -1 : num2 > num1 ? true  : false;

}
   
// keep this function call here 
console.log(CheckNums(readline()));
