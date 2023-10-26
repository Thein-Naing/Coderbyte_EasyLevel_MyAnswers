/* Palindrome Swapper

Have the function PalindromeSwapper(str) take the str parameter being passed and determine 
if a palindrome can be created by swapping two adjacent characters in the string.
If it is possible to create a palindrome, then your program should return the palindrome, if not then return the string -1.
The input string will only contain alphabetic characters.
For example: if str is "rcaecar" then you can create a palindrome by swapping the second and third characters,
so your program should return the string racecar which is the final palindromic string. */

function PalindromeSwapper(str) { 

 	for(let i = 0; i < str.length; i++) {
    let word = str.slice(0, i) + str[i + 1] + str[i] + str.slice(i + 2);    /* 1. Create new word by swapping two adjacent characters in the string. 
                                                                                  Meaning: Create a palindrome b swapping the second and third characters of given str ----> str[i] + str[i+1] to str[i + 1] + str[i].
                                                                                  (Given Statement (Given Statement: if a palindrome can be created by swapping two adjacent characters in the string.) */
 		if (word === word.split('').reverse().join('')){                        /* 2. If created word  can be converted to palindrime , then return this word.
			return word;                                                                (Given Statement: If it is possible to create a palindrome, then your program should return the palindrome) */
		}
	}	
	
	return -1;                                                               // 3. if not then return the string -1.
}
   
// keep this function call here 
console.log(PalindromeSwapper(readline()));
