/*  Second GreatLow

Have the function SecondGreatLow(arr) take the array of numbers stored in arr and return the second lowest and second greatest numbers, 
respectively, separated by a space. For example: if arr contains [7, 7, 12, 98, 106] the output should be 12 98. 
The array will not be empty and will contain at least 2 numbers. It can get tricky if there's just two numbers!    */


function SecondGreatLow(arr) { 

  // code goes here  
  /* return the second lowest and second greatest numbers, respectively, separated by a space. */
  /* The array will not be empty and will contain at least 2 numbers. it can get tricky if there's just two numbers!  */
  

  // 1. sort the given array to get array of numbers in ASC(ascending) order.
  // 2. loop through each every number and check if there is same three number. we will start form i = arr.length -1 and loop backward to beginning.
  /* 3. if there is same three number in array, use arr.splice method to remove one extra number. 
     4. when returning final result for second lowest and second greatest numbers,(use String Concatenation) add "," between numbers. */


  arr =  arr.sort((a, b) => b - a );  
  for (let i = arr.length - 1; i > 0; i--) { 
        if (arr[i] == arr[i - 1]) {   //  e.g for array = [2,2,2,5,5,5,6] case.
            arr.splice(i, 1);         //  remove element start index at arr[i] and remove only one extra number.
        }
    }

  if (arr.length === 2) {             /*  return second lowest and second greatest numbers,
                                          respectively, separated by a space(use String Concatenation, add "," between numbers). */ 
    return arr[0] + " " + arr[1];

   }  else if (arr.length > 2 ) {    

    return  arr[arr.length - 2] + " " + arr[1];

   }  else {

    return arr[0] + " " + arr[0];    /* e.g for array = [80, 80] and arr = [7, 7, 90, 1000003] cases. */
   }
   
}
// keep this function call here 
console.log(SecondGreatLow(readline()));
