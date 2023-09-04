/* FizzBuzz

Have the function FizzBuzz(num) take the num parameter being passed and return all the numbers from 1 to num separated by spaces, 
but replace every number that is divisible by 3 with the word "Fizz", replace every number that is divisible by 5 with the word "Buzz",
and every number that is divisible by both 3 and 5 with the word "FizzBuzz". For example:
if num is 16, then your program should return the string "1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz 16". 
The input will be within the range 1 - 50. */




function FizzBuzz(num) { 

  // code goes here  
    let result = [];  //1. create an array to add elements , initially is empty.

  for( let i = 1; i <= num; i++) {  //2. loop through all elements starting from i = 1 and i <= num.
      
     if (!( i % 3 )) {    //3. use modulus operator to determine the remainder by 3
      result.push("Fizz");  //3A. remainder !== 1 then add Fizz to result array.
    }                      //3B. !( i % 3) === 0  or meaning: i is divisible by 3 .

     else if(!(i % 5)){   // 4. same as procedure 3 & 3A.
      result.push("Buzz");
    }
   
     else if (!(i % 3) && !( i % 5)) {
     result.push("FizzBuzz"); // 5.same as procedure 3 & 3A.
    }

    else {
      result.push(i)  // 6. all above conditions are not met, then add (i) to result array.
    }
  }


  return result.join(" ");  //7. join the elements inside result array and return.

}
   
// keep this function call here 
console.log(FizzBuzz(readline()));
