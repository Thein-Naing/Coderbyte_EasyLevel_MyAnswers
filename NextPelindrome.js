/* Next Palindrome
Have the function NextPalindrome(num) take the num parameter being passed and return the next largest palindromic number.
The input can be any positive integer. For example: if num is 24, then your program should return 33 because that is the next largest number that is a palindrome.
Examples
Input: 2
Output: 3
Input: 180
Output: 181

Tags
searching */

function NextPalindrome(num) { 

  // code goes here  

 let word = (num + 1)                                                              // 1. Define a variable called word and set its initial value of next palindrome num shall be  num + 1. 
    while (word.toString().split('').reverse().join('') !== word.toString())       // 2. Specify true or false condition for while loop.
        word++;                                                                    // 3. If desired condition is met, then update word.
    return word;                                                                   // 4. Return word.

}
   
// keep this function call here 
console.log(NextPalindrome(readline()));
