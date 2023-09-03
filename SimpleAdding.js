/*Simple Adding
Have the function SimpleAdding(num) add up all the numbers from 1 to num. For example:
if the input is 4 then your program should return 10 because 1 + 2 + 3 + 4 = 10.
For the test cases, the parameter num will be any number from 1 to 1000. */

function SimpleAdding(num) { 

  // code goes here  
 //1. define initial numbers of elements in num to zero.

  let numbers = 0;

  //2. use for loop and loop through each element and take note here i < num + 1 === or i <= num
 for ( let i = 0; i <= num; i++) {

  numbers += i;  //3. numbers = numbers + i
 }
  //4. return numbers
  return numbers; 
}
   
// keep this function call here 
console.log(SimpleAdding(readline()));
