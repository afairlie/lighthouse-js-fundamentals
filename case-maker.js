let camelCase = function(input) {
  let fullString = [];
  for (let i = 0; i < input.length; i++){ // loop through chars in string
    if (input[i] === " "){ // if char is a space
      i++; // increase i count
      fullString.push(input[i].toUpperCase()); // push that next char as upper case to fullString
    } else {
      fullString.push(input[i]); // otherwise, push current char to fullString
    }
  }
  return fullString.join(""); // return joined fullString array as string (no spaces)
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));