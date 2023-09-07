/*Number Addition

Have the function NumberAddition(str) take the str parameter, search for all the numbers in the string, add them together, then return that final number.
For example: if str is "88Hello 3World!" the output should be 91.
You will have to differentiate between single digit numbers and multiple digit numbers like in the example above. 
So "55Hello" and "5Hello 5" should return two different answers. 
Each string will contain at least one letter or symbol. */


function NumberAddition(str) { 

  // code goes here  

   let sum = 0;  //1. define sum of all numbers with initial state value "zero".

  
  //2. remove everything from given str except numbers from string and then convert them to array.
  //2A. use str.replace(/[^0-9\.]+/g," ") regex and .split method.
  //2B. That str.replace(/[^0-9\.]+/g," ") is a bit tricky.
  //2C. / / is "beginning and end of regex". [^0-9\.]+/g means "matches one or more digits starting from 0-9".  ,"" means replace anything that is not a number with nothing.
  

  str = str.replace(/[^0-9\.]+/gi," ").split(" ");



  //3. loop through every number characters in updated str and then convert to integer and add to sum and update the sum.
    for (let i = 0; i < str.length; i++) {
        sum += Number(str[i]);
    }

         
  //4. return sum.

return sum;

}
   
// keep this function call here 
console.log(NumberAddition(readline()));
