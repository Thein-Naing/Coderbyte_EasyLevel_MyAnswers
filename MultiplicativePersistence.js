/* Multiplicative Persistence

Have the function MultiplicativePersistence(num) take the num parameter being passed which will always be a positive integer and
return its multiplicative persistence which is the number of times you must multiply the digits in num until you reach a single digit. 
For example: if num is 39 then your program should return 3 because 3 * 9 = 27 then 2 * 7 = 14 and finally 1 * 4 = 4 and you stop at 4.  */


function MultiplicativePersistence(num) { 

 // code goes here  
 /* given:  the number of times we must multiply the digits in num until 
            we reach a single digit. 
            
    clarification: it is a specified condition to meet desired the result at the end and we should use while loop.
                   because the while loop loops through a block of code as long as a specified condition is true. */ 

  let count = 0;                              // 1. initial number of times multiply the digits in num shall be "zero".

   while (num.toString().length > 1) {        // 2 . convert given num to string and initiate while loop with if there is more than a single digit. 


    num = num.toString().split('').reduce((a,b) => a * b, 1);   /* 3. specified condition here is we must multiply the digits in given num
                                                                      until we reach a single digit.so use arr.reduce method to satisfy this condition. 
                                                                 notes:  array.reduce(function(total, currentValue), initialValue) 
                                                                 total = the initialValue, or the previously returned value of the function. here total = a;
                                                                 currentValue = The value of the current element. here currentValue = b;
                                                                 initialValue = A value to be passed to the function as the initial value. here initialValue = 1; 
                                                                                because in while loop condition, we assume num.toString().length > 1. */
                                                                 
                                                                 
    count += 1;                                                 // 4. if it is true, update the count.
  }
 
  return count;                                                 // 5. return count.
}
   
// keep this function call here  
console.log(MultiplicativePersistence(readline()));
