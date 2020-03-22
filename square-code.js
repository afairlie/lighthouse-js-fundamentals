const squareCode = function(message) {
  str = message.split(" ").join("").split("")     // remove spaces, return as string.
  let squareDims = Math.ceil(Math.sqrt(str.length));    // round square root of str.length

  let arr = [];
  for (let i = 0; i < str.length; i+squareDims){    // iterate over str at intervals of squareDims (ie. 3)
    arr.push(str.splice(i, squareDims))   // splice squareDims value (ex.3) chars at index i (ex. 0, 3, 6)
  }

  let finalArr = [];

  for (let y = 0; y < squareDims; y++){     // y axis = rows
    let intArr = [];
    for (let x = 0; x < arr.length; x++){     // x axis = columns
      if (arr[x][y] === undefined) {x++} else {   // if a char is undefined, move to next column
        intArr.push(arr[x][y])    // push char to interior array
      } 
    }
    finalArr.push(intArr.join(""));   // join interior array as string, push to final array
  }

  // RETURN SOMETHING AT THE END
  return finalArr.join(" ");    // join arrays in final array as strings with spaces between, return that string.

// TEST OBJECT
/*   
  return obj = {
    dims: squareDims,
    array: arr,
    finalArray: finalArr.join(" ")
  }; 
*/

}

//TEST CASES
console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));