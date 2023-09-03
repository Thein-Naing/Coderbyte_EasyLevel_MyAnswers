First Factorial

/*Have the function FirstFactorial(num) take the num parameter being passed and 
return the factorial of it. For example: if num = 4, 
then your program should return (4 * 3 * 2 * 1) = 24.
For the test cases, the range will be between 1 and 18 and 
the input will always be an integer. */


function FirstFactorial(num) { 
  //1.  let num === 1 initially; it will return sum =  1 * 1 = 1 => 1 * FirstFactorial(n)
  //2.  let num === 2 ; then sum = 2 * (2-1) = 2 => n * FirstFactorial(n-1)
  //3. Use ternary operator
return ( num === 1 ? 1 :  num * FirstFactorial(num -1)); 
}

console.log(FirstFactorial(readline());


/*### Other solution */

function FirstFactorial(num) { 
  // code goes here  
    let const arr = [0, 1]  // 1. define initial arr with total = 1 * 1
    let total = 1;
    for ( let i = 2;  i<= num; i++) { // 2. loop start from i = 2 because we already declared arr = [0, 1]
      total *= i;  //3. total = total * i
    }

 return total; 
}
   
// keep this function call here 
console.log(FirstFactorial(readline()));
