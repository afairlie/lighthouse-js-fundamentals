let repeatNumbers = function(data) {
  let finalArray = [];
  for (let arr of data){ // loop through arrays in data array
    let number = [];
    for (let x = 0; x < arr[1]; x++){ // for the number of times indicated at index 1 in array
      number.push(arr[0]) // push the number indicated at index 0 to "number" array
    }
    finalArray.push(number.join("")); // convert new repeated number in "number" array to string, push to finalArray
  }
  return finalArray.join(", "); // return final array as strings, separated by ", "
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));