const conditionalSum = function(values, condition) {
  let count = 0;
  if (condition === "even"){ // if condition is even, loop through values, checking if they're even, and if they are add those values in count
    for (let i = 0; i < values.length; i++){
      if (values[i] % 2 === 0){
        count += values[i];
      }
    }

  } else if (condition === "odd"){ // if condition is odd, loop through values, checing if they're odd, and if they are add those values to count
    for (let i = 0; i < values.length; i++){
      if (values[i] % 2 !== 0){
        count += values[i];
      }
    }
  }
  return count;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));