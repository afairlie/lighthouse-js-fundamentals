const urlEncode = function(text) {

  let textArray = text.trim().split(''); // trim space from start and end of string, split string into array of chars
  // (strings are immutable, can't insert %20 without converting to array of chars)

  for (let i = 0; i < textArray.length; i++){ // iterate through chars, swap for %20 if char === space
    if (textArray[i] === ' '){
      textArray[i] = '%20';
    }
  }
  return textArray.join(''); // return the muted array as a string again, no spaces
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));