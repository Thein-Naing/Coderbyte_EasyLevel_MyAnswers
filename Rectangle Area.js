/* Rectangle Area
Easy
Have the function RectangleArea(strArr) take the array of strings stored in strArr, which will only contain 4 elements and
be in the form (x y) where x and y are both integers, and return the area of the rectangle formed by the 4 points on a Cartesian grid.
The 4 elements will be in arbitrary order. 
For example: if strArr is ["(0 0)", "(3 0)", "(0 2)", "(3 2)"] then your program should return 6
because the width of the rectangle is 3 and the height is 2 and the area of a rectangle is equal to the width * height. */

function RectangleArea(strArr) { 

  // code goes here  
  
  let width = strArr.map(x => Number(x.split(' ')[0].replace(/[()]/, ''))).sort((a, b) => a - b)
  let height = strArr.map(y => Number(y.split(' ')[1].replace(/[()]/, ''))).sort((a, b) => a - b)
  
  return (width[3] - width[0] ) * (height[3] - height[0]);
}
   
// keep this function call here 
console.log(RectangleArea(readline()));
