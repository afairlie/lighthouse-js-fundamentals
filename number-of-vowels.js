let numberOfVowels = function(data) {
  let count = 0;
  // loop through data (string array)
  for (let i = 0; i < data.length; i++){
    // conditional (ternary) operator to identify if letter is a, e, i, o, or u? if yes, increase count ++
    (data[i] === 'a') ? count ++ :
    (data[i] === 'e') ? count ++ :
    (data[i] === 'i') ? count ++ :
    (data[i] === 'o') ? count ++ :
    (data[i] === 'u') ? count ++ :
    count = count;
  }
  return count;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));