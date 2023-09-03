/* Questions Marks
Have the function QuestionsMarks(str) take the str string parameter,
which will contain single digit numbers, letters, and question marks,
and check if there are exactly 3 question marks between every pair of two numbers that add up to 10. 
If so, then your program should return the string true, otherwise it should return the string false. 
If there aren't any two numbers that add up to 10 in the string, then your program should return false as well.

For example: if str is "arrb6???4xxbl5???eee5" then your program should return true 
because there are exactly 3 question marks between 6 and 4, and 3 question marks
between 5 and 5 at the end of the string. */

function QuestionsMarks(str) { 

let res = false; //1. defince initial state of result === false.
  
   //2. It will be nested loop and we have to loop with pair of two single digit numbers(e.g.Num (i + j) === 10).
for ( let i = 0; i < str.length; i++) { //2A. loop first number with index i and initial value 0.
  for (let j = i+1; j < str.length; j++) { //2B. inside first number loop, loop the second number with index j with initial value i+1.
    if(Number(str[i]) + Number(str[j]) === 10){ //2C. check number value of indxes i + j === 10, if say yes then result is true.
      res = true;
      //3.Now we have to check quantity of ? is exactly 3 between index i and j.
      //3A.slice index i and index j from i???j or i??j first and ??? or ?? left.
      //3B.Then split the ? and then find length of ?  and check with quantity of ?
      if(str.slice(i,j).split("?").length -1 < 3) { 
        return false;
      }
    }
  }
}
  return res;
}
  console.log(QuestionsMarks(readline()));
