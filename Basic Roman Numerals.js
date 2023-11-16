/* Basic Roman Numerals
easy

Have the function BasicRomanNumerals(str) read str which will be a string of Roman numerals. 
The numerals being used are: I for 1, V for 5, X for 10, L for 50, C for 100, D for 500 and M for 1000. 
In Roman numerals, to create a number like 11 you simply add a 1 after the 10, so you get XI. 
But to create a number like 19, you use the subtraction notation which is to add an I before an X or V (or add an X before an L or C).
So 19 in Roman numerals is XIX.
The goal of your program is to return the decimal equivalent of the Roman numeral given. For example: if str is "XXIV" your program should return 24
Examples
Input: "IV"
Output: 4
Input: "XLVI"
Output: 46

Tags
string manipulation searching encoding */

function BasicRomanNumerals(str) { 

  // code goes here  

  let romans = {
    "I": 1,
    "IV": 4,
    "V": 5,
    "IX": 9,
    "X": 10,
    "XL": 40,
    "L": 50,
    "XC": 90,
    "C": 100,
    "CD": 400,
    "D": 500,
    "CM": 900,
    "M": 1000
};

    let result = 0;
    for (let i = 0; i < str.length; i++) {
      // // romans[s[i]] === "I", romans[s[i+1]] === "V" --->  "IV" === 1 - 5 = 4
        romans[str[i]] < romans[str[i+1]] ? result -= romans[str[i]]: result += romans[str[i]]
     }
    return result;

}
   
// keep this function call here 
console.log(BasicRomanNumerals(readline()));
