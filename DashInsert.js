/*  Dash Insert
Have the function DashInsert(str) insert dashes ('-') between each two odd numbers in str.
For example: if str is 454793 the output should be 4547-9-3. Don't count zero as an odd number.

Examples
Input: 99946
Output: 9-9-946
Input: 56730
Output: 567-30

Tags
string manipulationsearching */

function DashInsert(str) { 

  // code goes here  

  /*1. create and use regex to check odd numbers [1,3,5,7,9] of given str 
  are match with following 1,3,5,7,9 numbers in given str.*/ 

  /*2.   / / === start and end of regex.
   d === digits (0-9) 
   d*[12579]  === digits [13579] any character of: '1', '3', '5', '7', '9'
  (?  === look ahead to see if there is a match in following number
   d*[13579] === digits [13579] any character of: '1', '3', '5', '7', '9'
  ) === end of look-ahead   
   g ==== global search flag
     */

    /* 3. if match we found there are 2 odd numbers and so 
    we will add "-" sign betwwen this 2 odd numbers by using  $1.
    3A. $1 === $1 is a first captured group.
     this values used in replacement patterns. 
     this is substitutions and specifically used in numbered group substitutions. */

     /*  4. MEANING : Hey regex! find if each and every folowoing number is 1,3,5,7,9 for current number 1,3,5,7,9.
     if you found it then add "-" between this 2 odd number using $1 sign and return it..
     */
    
  return str.replace(/(d*[13579])(?=d*[13579])/g, "$1-");

}
   
// keep this function call here 
console.log(DashInsert(readline()));
