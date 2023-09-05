/* AB Check

Have the function ABCheck(str) take the str parameter being passed and return the string true
if the characters a and b are separated by exactly 3 places anywhere in the string at least once
(ie. "lane borrowed" would result in true because there is exactly three characters between a and b).
Otherwise return the string false. */

function ABCheck(str) { 

  // code goes here 
  
  //1. use reges str.match method.
  /*2. a is 3 places away from b and also b is 3 places away from a.
      . DOT represent ANY ONE character 
      and so .{3} === three characters
      g flag for global search
      i flag for ingoring lower case and upper case
      finally we end up with /a.{3}b/gi and /b.{3}a/gi
  //3. then return it by using ternary operator for true and false */
  
    if ((str.match(/a.{3}b/gi)) || (str.match(/b.{3}a/gi))) {
       return true;
   }  else {    
       return false;   
   }
}
  //4. Or more clean and clear code.
      return ((str.match(/a.{3}b/gi)) || (str.match(/b.{3}a/gi))) ? true : false;

  // keep this function call here 
console.log(ABCheck(readline()));

