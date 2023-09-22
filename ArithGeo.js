/*  Arith Geo

Have the function ArithGeo(arr) take the array of numbers stored in arr and return the string "Arithmetic" 
if the sequence follows an arithmetic pattern or return "Geometric" if it follows a geometric pattern. 
If the sequence doesn't follow either pattern return -1. 
An arithmetic sequence is one where the difference between each of the numbers is consistent, 
where as in a geometric sequence, each term after the first is multiplied by some constant or common ratio.
Arithmetic example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54]. 
Negative numbers may be entered as parameters, 0 will not be entered, and no array will contain all the same elements. */


function ArithGeo(arr) { 

       let result = "-1";                                                        /* 1. initial state of result shall be "-1" assuming the sequence doesn't follow 
                                                                                      either "Arithmetic" or "Geometric" pattern.
    
        if ((arr[1] - arr[0]) == (arr[arr.length - 1] - arr[arr.length - 2])) {  /* 2. for array like this [5,10,15], we can express  arr[1]-arr[0] == (arr[2]-arr[1]. 
                                                                                       but for array like this [1,2,3,4,5,7,10] we have to use (arr[arr.length - 1] - arr[arr.length - 2]) 
                                                                                      for last element of array instead of arr[1]-arr[0] == (arr[2]-arr[1] to avoid error in pattern. */
             result = "Arithmetic";                                              // 3. if the sequence follows an arithmetic pattern, update result = "Arithmetic" .
  
        } else if ((arr[1] / arr[0]) == (arr[arr.length - 1] / arr[arr.length - 2])) {  
  
             result = "Geometric";                                               // 4. if it follows a geometric pattern, update result = "Geometric".
                       
        } 

         return result;                                                          // 5. then just return result for ArithGeo function.
  }


// keep this function call here 
console.log(ArithGeo(readline()));
