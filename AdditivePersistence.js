/* Additive Persistence

Have the function AdditivePersistence(num) take the num parameter being passed which will always be a positive integer and 
return its additive persistence which is the number of times you must add the digits in num until you reach a single digit. 
For example: if num is 2718 then your program should return 2 because 2 + 7 + 1 + 8 = 18 and 1 + 8 = 9 and you stop at 9.   */

function AdditivePersistence(num) { 

 // note: if you can solve  MultiplicativePersistence challenge, you can also solve this challenge.

 // code goes here  
 /* given:  the number of times we must add the digits in num until 
            we reach a single digit. 
            
    clarification: it is a specified condition to meet desired result at the end and we should use while loop.
                   because the while loop loops through a block of code as long as a specified condition is true/met. */ 

  let count = 0;                              // 1. initial number of times multiply the digits in num shall be "zero".

  while (num.toString().length > 1) {        // 2 . convert given num to string and initiate while loop with length of given number is greater than 1. 


  num = num.toString().split('').reduce((a,b) => parseInt(a) + parseInt(b), 0);   /*3. specified condition here is we must add the digits in given num
                                                                                       until we reach a single digit. so use arr.reduce method to satisfy this condition 
                                                                                       notes:  array.reduce(function(total, currentValue), initialValue) 
                                                                   total = the initialValue, or the previously returned value of the function. here total = a;
                                                                   currentValue = The value of the current element. here currentValue = b;
                                                                   initialValue = A value to be passed to the function as the initial value. here initialValue = 0; */
  
    count += 1;                                                // 4. if it is true, update the count.
  }
  return count;                                                // 5. return count.
}
   
// keep this function call here 
console.log(AdditivePersistence(readline()));
