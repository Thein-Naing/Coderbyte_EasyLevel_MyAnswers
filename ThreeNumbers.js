/* Three Numbers
Have the function ThreeNumbers(str) take the str parameter being passed and determine if exactly three unique, 
single-digit integers occur within each word in the string.
The integers can appear anywhere in the word, but they cannot be all adjacent to each other.
If every word contains exactly 3 unique integers somewhere within it, then return the string true, otherwise return the string false.
For example: if str is "2hell6o3 wor6l7d2" then your program should return "true" but if the string is "hell268o w6or2l4d"
then your program should return "false" because all the integers are adjacent to each other in the first word.

Examples
Input: "2a3b5 w1o2rl3d g1gg92"
Output: true
Input: "21aa3a ggg4g4g6ggg"
Output: false

Tags
string manipulation regular expression */

function ThreeNumbers(str) { 

  // code goes here  
  
  /*       1. Given Statement: The integers can appear anywhere in the word, but they cannot be all adjacent to each other.
              (/\d\d\d/) === three numbers in a row 
              So return false if  words[i].match(/\d\d\d/)
              
           2. Given Statement: determine if exactly three unique, single-digit integers occur within each word in the string.                                                           
              (!/[^\[D*\d\D*\d\D*\d\D*$]/) !== non digit character(D*) + digit(\d\) + non digit character(D*) + digit (\d\) + non digit character(D*) + digit(\d\)
              So return false if  words[i].match(!/[^\[D*\d\D*\d\D*\d\D*$]/)
              
           3. Given STatement: If every word contains exactly 3 unique integers somewhere within it, then return the string true. Otherwise return the string false.            
              (/(\d).*\1/) === more than 3 numbers in word  
              So return false if  words[i].match(/(\d).*\1/).  */    
                               
 
    words = str.split("  ");     /* 4. Divide the given string into an ordered array of words using arr.split(" ") method and  
                                       make one white space between double quoations marks. */
  
                                 // console.log(words); ----> ['2hell6o3', 'wor6l7d2']
  
    for (let i = 0; i < words.length; i++) {
   
    if (words[i].match(!/[^\[D*\d\D*\d\D*\d\D*$]/) || words[i].match(/(\d).*\1/) || words[i].match(/\d\d\d/)) {
    return false;
       } 
    }
    return true;
}
   
// keep this function call here 
console.log(ThreeNumbers(readline()));
