/*  Mean Mode

Have the function MeanMode(arr) take the array of numbers stored in arr and return 1 if the mode equals the mean, 
0 if they don't equal each other (ie. [5, 3, 3, 3, 1] should return 1 because the mode (3) equals the mean (3)).
The array will not be empty, will only contain positive integers, and will not contain more than one mode. */


function MeanMode(arr) { 

  // code goes here  

  // 1. use arr.reduce method to find mean. 
  
  let mean = arr.reduce((a,b) => a + b) / arr.length;

 // 2. to find mode, firstly create a mode object that stores frequencies of elements in arr.
  
  let obj = {}; //2A. e.g { 2: "1", 4: "3", 6:"1"} key/value pair for [4,4,4,6,2]

  /*3. use arr.forEach method to call a function for each every element stored in array
  to find the frequencies of occurence in the array.

   3A. if found that occurence is more than one time, increment current element value
    or set it to one if not found. take note using || operator for found and not found values.*/
  
  arr.forEach(el => obj[el] = (obj[el] || 0) + 1);

  /*4. then compare frequencies of each every element in modeObj 
  by using arr.reduce method and ternary operator. */
  
  let mode = arr.reduce((a, b) => obj[b] > obj[a] ? b : a);

  //5. then simply return mode === mean using ternary operator.
  
    return mode === mean ? 1 : 0;
    }

// keep this function call here 
console.log(MeanMode(readline()));
