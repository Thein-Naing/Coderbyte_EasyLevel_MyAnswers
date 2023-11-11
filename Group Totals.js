/*easy
Group Totals
Have the function GroupTotals(strArr) read in the strArr parameter containing key:value pairs where the key is a string and the value is an integer. 
Your program should return a string with new key:value pairs separated by a comma such that each key appears only once with the total values summed up.
For example: if strArr is ["B:-1", "A:1", "B:3", "A:5"] then your program should return the string A:6,B:2.

Your final output string should return the keys in alphabetical order. Exclude keys that have a value of 0 after being summed up.
Examples
Input: ["X:-1", "Y:1", "X:-4", "B:3", "X:5"]
Output: B:3,Y:1
Input: ["Z:0", "A:-1"]
Output: A:-1

Tags
searching math fundamentals data science */

function GroupTotals(strArr) { 

  // code goes here  

    let obj = {};                                              // 1. Initiate hash map to store key-value pairs.
    let result = [];                                           // 2. Initiate empty array to hold formatted key-value pairs.

    for(let i=0; i < strArr.length; i++) {                     // 3. Iterate through given strArr and split the arrArr. 
	  let word = strArr[i].split(':')                            // 3. split the array.
	  obj[word[0]] = (obj[word[0]] || 0) + parseInt(word[1])}    // 4. Add ["X", "1"] key-value pair to hash map.

    let keys = Object.keys(obj).sort();                        // 5. Create keys from obj by using Object.keys() method and sort the keys.     
        keys.map((key) => {                                    // 6. Find the keys without 0 value from obj and add to result array.
           if (obj[key] !== 0) {
            result.push(key + ":" + obj[key]);
        }
    })

    return result.join(",");                                  //7. Rejoin and return the result.

}
// keep this function call here 
console.log(GroupTotals(readline()));
