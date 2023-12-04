/* Scale Balancing
easy
Have the function ScaleBalancing(strArr) read strArr which will contain two elements, the first being the two positive integer weights on a balance scale (left and right sides) and the second element being a list of available weights as positive integers. Your goal is to determine if you can balance the scale by using the least amount of weights from the list, but using at most only 2 weights. For example: if strArr is ["[5, 9]", "[1, 2, 6, 7]"] then this means there is a balance scale with a weight of 5 on the left side and 9 on the right side. It is in fact possible to balance this scale by adding a 6 to the left side from the list of weights and adding a 2 to the right side. Both scales will now equal 11 and they are perfectly balanced. Your program should return a comma separated string of the weights that were used from the list in ascending order, so for this example your program should return the string 2,6

There will only ever be one unique solution and the list of available weights will not be empty. It is also possible to add two weights to only one side of the scale to balance it. If it is not possible to balance the scale then your program should return the string not possible.
Examples
Input: ["[3, 4]", "[1, 2, 7, 7]"]
Output: 1
Input: ["[13, 4]", "[1, 2, 3, 6, 14]"]
Output: 3,6

Tags
array searching hash table Facebook  */

function ScaleBalancing(strArr) { 

  // code goes here  
  const balance = JSON.parse(strArr[0]);
  const scaleDiff = Math.abs(balance[0] - balance[1]);
  const weights = JSON.parse(strArr[1]);

  for (let i = 0; i < weights.length; i++) {
      if (weights.includes(scaleDiff)) return scaleDiff.toString();
    for (let j = i + 1; j < weights.length; j++) {
      if (Math.abs(weights[i] + weights[j]) === scaleDiff || Math.abs(weights[i] - weights[j]) === scaleDiff) {
        return weights[i] < weights[j] ? weights[i] + ',' + weights[j] : weights[j] + ',' + weights[i];
      }
    }
  }

  return 'not possible';
}
// keep this function call here 
console.log(ScaleBalancing(readline()));
