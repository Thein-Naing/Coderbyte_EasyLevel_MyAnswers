/* 
Have the function FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements: 
the first element will represent a list of comma-separated numbers sorted in ascending order, 
the second element will represent a second list of comma-separated numbers (also sorted). 
Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order.
If there is no intersection, return the string false.*/


function FindIntersection(strArr) { 

  let a = strArr[0].split(', ') // 1.split the , with one space in first str for comma-separated numbers to find intersection string..
  let b = strArr[1].split(', ') // 2. split the , with one space in second str for comma-separated numbers to find intersection string.
  
  //3A. filter the first string with intersection called x.
  //3B. return this intersection x in second string with arrow function
  //3C. find the first string intersection inside second string call
  //3D. check returning first string intersection === intersection string x
  //3E. If say yes, then check result.length is greater than zero and use ternary operator and .join method for intersection or false.
  
  let result = a.filter(x => b.find(a => a === x)) 
  return result.length > 0 ? result.join(',') : 'false'
}
   // keep this function call here 
console.log(FindIntersection(readline()));

// Alternative Method:
function FindIntersection(strArr) { 
  let stack = [];
 arr1 = strArr[0].split(", ");
 arr2 = strArr[1].split(", ");

for(let i = 0; i < arr1.length; i++ ) {
    if (arr2.includes(arr1[i])) {
      stack.push(arr1[i]);
    }
  }
  return stack.length === 0 ? false : stack.toString();
}
// keep this function call here 
console.log(FindIntersection(readline()));
