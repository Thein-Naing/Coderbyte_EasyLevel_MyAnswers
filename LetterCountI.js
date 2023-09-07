/*Letter Count I
Have the function LetterCountI(str) take the str parameter being passed and return the first word with the greatest number of repeated letters. 
For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and 
it comes before ever which also has 2 e's. If there are no words with repeating letters return -1. Words will be separated by spaces.
Examples
Input: "Hello apple pie"
Output: Hello
Input: "No words"
Output: -1*/


/* Method Statement: This is a pretty typical way to solve this sort of algorithm. 
                     It essentially runs through the for loop to find a result what we want
                     and until we found the desired result.
                     if it is not found, return a default statement (i.e. return -1;). 
                     If there is only one return statement for (for loop), 
                     then it could be slightly better for clean code.*/



let words = str.split(" ");  //1. convert given str to words.
   let count = 0;   // 2A. initial state of count shall be "zero".
   let result = -1; // 2B. assuming there are no words with repeating letters (it is given statement from question).
 
   for(let i=0; i < words.length; i++) {//3. loop through words with index i and define the word with index i of words..
     let word= words[i];

     for( let j=0; j< word.length; j++) {//4.loop through word with index j and pass the letter.
       let letter = word[j];

       for(let k=0; k < word.length; k++) {//5.loop through word with index k and pass the another letter.
      
       /* 6A.letter being pased in work[k] is not literally the same as letter being pasedin work[j]  
       6B.and so no words with repeating letters */
         
           if( k !== j && letter === word[k] && result === -1) {
             
              count += 1;  // 7. then update the state of count by =====> count = count+1 =====> count += 1;  

              if(count > 1) { //8. finally update the state of result if state of count is changed and return the result.
                
                 result = word;
              
           }
         }
       }
     }
   }
   return result;
}
// keep this function call here 
console.log(LetterCountI(readline()));
