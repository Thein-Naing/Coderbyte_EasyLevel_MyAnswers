/* Other Products
Have the function OtherProducts(arr) take the array of numbers stored in arr and return a new list of the products of all the other numbers in the array for each element.
For example: if arr is [1, 2, 3, 4, 5] then the new array, where each location in the new array is the product of all other elements, is [120, 60, 40, 30, 24]. 
The following calculations were performed to get this answer: [(2*3*4*5), (1*3*4*5), (1*2*4*5), (1*2*3*5), (1*2*3*4)]. 
You should generate this new array and then return the numbers as a string joined by a hyphen: 120-60-40-30-24. 
The array will contain at most 10 elements and at least 1 element of only positive integers.
Examples
Input: [1,4,3]
Output: 12-3-4
Input: [3,1,2,6]
Output: 12-36-18-6

Tags
arra ymath fundamentals Google */

/*  Given Statement:  return a new list of the products of all the other numbers in the array for each element.
                      For example: if arr is [1, 2, 3, 4, 5] then the new array, where each location in the new array is the product of all other elements, is [120, 60, 40, 30, 24].
                      The following calculations were performed to get this answer: [(2*3*4*5), (1*3*4*5), (1*2*4*5), (1*2*3*5), (1*2*3*4)].                       
                        
                      Note: Array.map() method and it allows us to iterate over an array and modify its elements using a callback function.  
                            The callback function will then be executed on each of the array's elements.  
                            Arr.reduce() method performs a reducer function on each element of the array and returns a single output.
                      1. Use Array.reduce() method to find sum of overall numbers stored in arr. 
                          // example: arr = [3,1,2,6] ; console.log(arr.reduce((a, b) => a * b))   // 36
                         Then we will divide sum by individual numbers. Execute thiscondition in Array.map() method callback function. 
                          // 36/3, 36/1, 36/2, 36/6 
                          // console.log(arr.map((num) => arr.reduce((a,b)=> a * b) / num).join("-")); // 12,36,18,6*/

function OtherProducts(arr) { 
  // code goes here    
return  arr.map((num) => arr.reduce((a,b)=> a * b) / num).join("-");
}
// keep this function call here 
console.log(OtherProducts(readline()));
