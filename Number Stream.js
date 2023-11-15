/* Number Stream
easy 

Have the function NumberStream(str) take the str parameter being passed which will contain the numbers 2 through 9, and determine if there is a consecutive stream of digits of at least N length where N is the actual digit value. If so, return the string true, otherwise return the string false. For example: if str is "6539923335" then your program should return the string true because there is a consecutive stream of 3's of length 3. The input string will always contain at least one digit.
Examples
Input: "5556293383563665"
Output: false
Input: "5788888888882339999"
Output: true
Tags
string manipulation searching data science back-end Amazon */

function NumberStream(str) { 

  // code goes here  
  /* Given Statement: which will contain the numbers 2 through 9,  
     1. Use For Loop.
     Given Statement: determine if there is a consecutive stream of digits of at least N length where N is the actual digit value. 
     2.Convert given number to number string and create consecutive stream of digits using str.repeat() method.
console.log(String(i) // 2, 3, 5, 6, 8, 9
console.log(String(i).repeat(i))  // 22, 333, 4444, 55555, 666666, 7777777, 88888888, 999999999
console.log(digits); 
['22']
['22', '333']
['22', '333', '4444']
['22', '333', '4444', '55555']
['22', '333', '4444', '55555', '666666']
['22', '333', '4444', '55555', '666666', '7777777']
['22', '333', '4444', '55555', '666666', '7777777', '88888888']
3. If consecutive stream of digits is found in given str , return true. Otherwise return false.*/
  
let digits = [];
    for (let i = 2; i <= 9; i++) {
        digits.push(String(i).repeat(i));    
    for (let digit of digits) {
        if (str.includes(digit))           
            return true;
        }

    }
    return false;

}
   
// keep this function call here 
console.log(NumberStream(readline()));
