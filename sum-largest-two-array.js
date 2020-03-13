let sumLargestNumbers = function(data) {
  const largestNumber = [];
  for (let i = 0; i < 2; i++){ // repeat the following function twice
    // Math.max returns max of data array
    // indexOf searches for the index of the value math.Max returned
    // splice removes and returns 1 element at the index returned by indexOf (the value is returned as a string)
    // push pushes that string value to the largestNumber array
    largestNumber.push(data.splice(data.indexOf(Math.max(...data)), 1));
  }
  // parseInt returns largestNumber values as ints instead of strings
  return (parseInt(largestNumber[1]) + parseInt(largestNumber[0]));
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));