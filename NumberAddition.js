/*Number Addition

Have the function NumberAddition(str) take the str parameter, search for all the numbers in the string, add them together, then return that final number.
For example: if str is "88Hello 3World!" the output should be 91.
You will have to differentiate between single digit numbers and multiple digit numbers like in the example above. 
So "55Hello" and "5Hello 5" should return two different answers. 
Each string will contain at least one letter or symbol. */


function NumberAddition(str) { 

  // code goes here  

   let sum = 0;

  
  //2. remove everything from str except numbers from string and then convert to array.
  //2A . use str.replace(/[^0-9\.]+/g," ") regex method.

  str = str.replace(/[^0-9\.]+/gi," ").split(" ");



  //3. loop through every characters and convert to integer and add to sum and update the sum.
    for (let i = 0; i < str.length; i++) {
        sum += Number(str[i]);
    }

         
  //4. return sum.

return sum;

}
   
// keep this function call here 
console.log(NumberAddition(readline()));
