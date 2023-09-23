/* WordCount 
Have the function WordCount(str) take the str string parameter being passed 
and return the number of words the string contains 
(e.g. "Never eat shredded wheat or cake" would return 6).
Words will be separated by single spaces. */

function WordCount(str) { 

  // code goes here  
  
   /*1. remove the white space from string. use /\S+/g for better perfomance.
        \S+  replace chunk of white space.  */     
   //2. use str.match, str.length and return it. 
 
   return str.match(/\S+/g).length;
}
   
// keep this function call here 
console.log(WordCount(readline()));

/* Method 
 @remove the white space using regex .match(/\S+/g) and find words using array.length */
