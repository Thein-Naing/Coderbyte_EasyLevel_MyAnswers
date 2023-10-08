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

/* 
  1. Convert given str to lowercase letters by using str.toLowercase() and remove any special characters between letters using str.replace method with regex 
     /\w/g === Any non-word character with global flag g ( non-word character === white space, -, e.t.c) and replace them with " "(one space between double qoates).
     divide the given string into an ordered array of words using arr.split(" ") method and add an empty space between the parenthesis of the split()method.
     
  2. Create a For Loop to iterate each every letter of given str.
     we will convert first letter of each word to uppercase by using str.toUppcase() method and the charAt() method which returns the specified character from a string. 
     here is charAt(0) of letters[i] and then use str.slice() method which will extract from index 1 to the end of the string.
     
  3. Here str.length = 5
    1st iteration: str[0] = str[0].charAt(0).toUpperCase() + str[0].slice(1);
                   str[0] = "cats".charAt(0).toUpperCase()  + "cats".slice(1);
                   str[0] = "C"                            + "ats";
                   str[0] = "Cats";
    2nd iteration: str[1] = str[1].charAt(0).toUpperCase() + str[1].slice(1);
                   str[1] = "AND".charAt(0).toUpperCase()    + "AND".slice(1);
                   str[1] = "A"                            + "nd";
                   str[1] = "And";
    3rd iteration: str[2] = str[2].charAt(0).toUpperCase()   + str[2].slice(1);
                   str[2] = "Dogs".charAt(0).toUpperCase() + "dogs".slice(1);
                   str[2] = "D"                              + "ogs";
                   str[2] = "Dogs";
    4th iteration: str[3] = str[3].charAt(0).toUpperCase() + str[3].slice(1);
                   str[3] = "are".charAt(0).toUpperCase()  + "are".slice(1);
                   str[3] = "A"                            + "re";
                   str[3] = "Are";
    5th iteration: str[4] = str[4].charAt(0).toUpperCase() + str[4].slice(1);
                   str[4] = "Awesome".charAt(0).toUpperCase() + "Awesome".slice(1);
                   str[4] = "A"                           + "wesome";
                   str[4] = "Awesome";                                                         
    End of the For Loop.

    4. rejoin letters using str.join() method and return it.    */

  
  // code goes here  
  
 letters= str.toLowerCase().replace(/\W/g, " ").split(" ")

 for (let i = 0; i < letters.length; i++) {
    letters[i] = letters[i].charAt(0).toUpperCase() + letters[i].slice(1)
    }
 return letters.join(' ');
 
}

// keep this function call here 
console.log(DifferentCases(readline()));
