Have the function WordCount(str) take the str string parameter being passed 
and return the number of words the string contains 
(e.g. "Never eat shredded wheat or cake" would return 6).
Words will be separated by single spaces.

function WordCount(str) { 

  // code goes here  

  //1. trim the string . you can  leave this step also.
   str = str.trim();
  
   /*2. remove the white space from string. use /\S+/g for better perfomance
   \S+ replace chunk of white space */     

  const words = str.match(/\S+/g);
  //3. return words with .length
  return words.length;

  
  //###4. A bit cleaner code

  const words = str.match(/\S+/g);
  // return words.length;

  //###5. Or more cleaner code
   return str.match(/\S+/g).length;
}
   
// keep this function call here 
console.log(WordCount(readline()));

/* Method 
 @remove the white space using regex .match(/\S+/g) and find words using array.length */
