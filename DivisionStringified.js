/* Division Stringified

Have the function DivisionStringified(num1,num2) take both parameters being passed, divide num1 by num2, and return the result as a string with properly formatted commas.
If an answer is only 3 digits long, return the number with no commas (ie. 2 / 3 should output "1"). 
For example: if num1 is 123456789 and num2 is 10000 the output should be "12,346". */

function DivisionStringified(num1,num2) { 

  // code goes here  
  
 /* 1. convert result of num1 divided by num2 to string using rounded with Math.round method,
       arr.toString() and arr.split("") methods.
    2. if result.length <= 3, then just simply rejoin and return result.
    3. if result.length > 3  then we have to loop through each every length of result. 
       in this case, use arr.splice method to remove unwanted result, add "," or replace result with ",". 
    4. then rejoin and return result. 
    5. meaning: by using arr.splice method, if  i % 3 === 0,
       then delete elements will start from index at result.length - i.
       delete count will be 0 .
       and add "," new element will be right after the delete count of 0.
    6. e.g. num1 = 123456789 and num2 = 10000 , result = "12346", if i === 3 then result.length -i = 2 
            then "," will be added at index 2 of 12346 and 12,346. */


  let result = Math.round(num1 / num2).toString().split("");

  if (result.length <= 3)  
     result.join("");
  
    for (let i = result.length - 1; i > 0; i--) { 
            if (i % 3 === 0) {
      result.splice((result.length - i), 0, ","); 
    
        }
    }

    return result.join("");
}
   
   
// keep this function call here 
console.log(DivisionStringified(readline()));
