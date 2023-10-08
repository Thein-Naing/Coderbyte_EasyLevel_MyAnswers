/* Different Cases
Have the function DifferentCases(str) take the str parameter being passed and return it in upper camel case format where the first letter of each word is capitalized. 
The string will only contain letters and some combination of delimiter punctuation characters separating each word.

For example: if str is "Daniel LikeS-coding" then your program should return the string DanielLikesCoding.

Examples
Input: "cats AND*Dogs-are Awesome"
Output: CatsAndDogsAreAwesome
Input: "a b c d-e-f%g"
Output: ABCDEFG

Tags
string manipulation regular expression */ 


function DifferentCases(str) { 

  // code goes here  
  
 words= str.toLowerCase().replace(/\W/g, " ").split(' ')

 for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1)
    }
 return words.join(' ');
 
}

// keep this function call here 
console.log(DifferentCases(readline()));
