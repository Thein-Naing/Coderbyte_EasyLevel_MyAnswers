/* Star Rating
easy

Have the function StarRating(str) take the str parameter being passed which will be an average rating between 0.00 and 5.00, 
and convert this rating into a list of 5 image names to be displayed in a user interface to represent the rating as a list of stars and half stars.
Ratings should be rounded to the nearest half. There are 3 image file names available: "full.jpg", "half.jpg", "empty.jpg". 
The output will be the name of the 5 images (without the extension), from left to right, separated by spaces.
For example: if str is "2.36" then this should be displayed by the following image:

So your program should return the string "full full half empty empty".
Examples
Input: "0.38"
Output: half empty empty empty empty
Input: "4.5"
Output: full full full full half

Tags
string manipulation encoding back-end mobile Android iOS */

function StarRating(str) { 

  // code goes here  


  let arr = [];                                    // 1. Initiate a stack to hold stars.
  let num = Number(str);                           // 2.convert the given stars str into number and then round off the number to whole digit.
  
  for (let i = 0; i < 5; i++) {                    // 3. Loop through each and every character of given number to check value of number.
    
      num >= 0.75 ? arr.push('full') : (num < 0.75 && num >= 0.25) ? arr.push('half') : arr.push('empty'); 
    
      num--;                                       // 4. If num is .....  and if there is no number value then num-- etc
      
}
  return arr.join(' ');                             // Rejoin and return arr.
}
   
// keep this function call here 
console.log(StarRating(readline()));
