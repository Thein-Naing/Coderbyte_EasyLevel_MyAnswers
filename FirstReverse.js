/*Have the function FirstReverse(str) take the str parameter being passed and 
return the string in reversed order. For example: 
if the input string is "Hello World and Coders" 
then your program should return the string sredoC dna dlroW olleH.*/

function FirstReverse(str) { 

// code goes here  

/*     Step 1. Use the split() method to return a new array
               let splitedString = str.split(""); // let splitedString = "hello".split("");
               ["h", "e", "l", "l", "o"]
 
       Step 2. Use the reverse() method to reverse the new created array
               let reversedArray = splitedString.reverse(); // let reversedArray = ["h", "e", "l", "l", "o"].reverse();
               ["o", "l", "l", "e", "h"]
               
       Step 3. Use the join() method to join all elements of the array into a string
               "olleh"
    
       Step 4. Return the reversed string
               return joinedArray;  // "olleh"

       Step 5. Chaining the above three methods together:  */

              return str.split("").reverse().join(""); 
}

// keep this function call here 
console.log(FirstReverse(readline()));
