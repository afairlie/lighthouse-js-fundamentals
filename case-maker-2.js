const isLetter = function(c) {
  return c.toLowerCase() != c.toUpperCase();
}

const camelCase = function(input) {
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
}

const pascalCase = function(input){
  let fullString = [];
  fullString.push(input[0].toUpperCase());
  for (let i = 1; i < input.length; i++){
    if (input[i] === " "){
      i++;
      fullString.push(input[i].toUpperCase());
    } else {
      fullString.push(input[i]);
    }
  }
  return fullString.join("");
}

const snakeCase = function(input){
  let fullString = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] === " ") {
      fullString.push("_")
    } else {
      fullString.push(input[i]);
    }
  }
  return fullString.join("");
}

const kebabCase = function(input){
  let fullString = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] === " ") {
      fullString.push("-")
    } else {
      fullString.push(input[i]);
    }
  }
  return fullString.join("");
}

const titleCase = function(input) {
  let fullString = [];
  fullString.push(input[0].toUpperCase())
  for (let i = 1; i < input.length; i++){
    if (input[i] === " "){
      fullString.push(input[i]);
      i++;
      fullString.push(input[i].toUpperCase());
    } else {
      fullString.push(input[i]);
    }
  }
  return fullString.join("");
}

const vowelCase = function(input) {
  let fullString = [];
  for (let i = 0; i < input.length; i++){
    if (input[i] === "a" || input[i] === "e" || input[i] === "i" || input[i] === "o" || input[i] === "u") {
      fullString.push(input[i].toUpperCase());
    } else {
      fullString.push(input[i]);
    }
  }
  return fullString.join("");
}

const consonantCase = function(input) {
  let fullString = [];
  for (let i = 0; i < input.length; i++){
    if ((!(input[i] === "a" || input[i] === "e" || input[i] === "i" || input[i] === "o" || input[i] === "u")) && isLetter(input[i])) {
      fullString.push(input[i].toUpperCase());
    } else {
      fullString.push(input[i]);
    }
  }
  return fullString.join("");
}

const upperCase = function(input) {
  let fullString = [];
  for (let i = 0; i < input.length; i++){
    if (isLetter(input[i])){
      fullString.push(input[i].toUpperCase())
    } else {
      fullString.push(input[i]);
    }
  }
  return fullString.join("");
}

const lowerCase = function(input) {
  let fullString = [];
  for (let i = 0; i < input.length; i++){
    if (isLetter(input[i])){
      fullString.push(input[i].toLowerCase())
    } else {
      fullString.push(input[i])
    }
  }
  return fullString.join("");
}

const arrayCase = function(input, caseSelection) {
  let fullString = input;

  if (caseSelection.includes("snake")){
    fullString = snakeCase(fullString);
  }
  if (caseSelection.includes("kebab")) {
    fullString = kebabCase(fullString);
  }
  if (caseSelection.includes("title")) {
    fullString = titleCase(fullString);
  }
  if (caseSelection.includes("vowel")) {
    fullString = vowelCase(fullString);
  }
  if (caseSelection.includes("consonant")) {
    fullString = consonantCase(fullString);
  }
  if (caseSelection.includes("upper")){
    fullString = upperCase(fullString);
  }
  if (caseSelection.includes("lower")) {
    fullString = lowerCase(fullString);
  }
  
  return fullString;
}

const makeCase = function(input, caseSelection) {
  
  if (Array.isArray(caseSelection)){
    return arrayCase(input, caseSelection);
  } else { 
    return caseSelection === "camel" ? camelCase(input)
    : caseSelection === "pascal" ? pascalCase(input)
    : caseSelection === "snake" ? snakeCase(input)
    : caseSelection === "kebab" ? kebabCase(input)
    : caseSelection === "title" ? titleCase(input)
    : caseSelection === "vowel" ? vowelCase(input)
    : caseSelection === "consonant" ? consonantCase(input)
    : caseSelection === "upper" ? upperCase(input)
    : lowerCase(input);
  }
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));

/* 
let fullString = [];
for (let i = 0; i < input.length; i++) {
  fullString.push(input[i]);
}
for (let i = 0; i < fullString.length; i++){
  for (let i = 0; i < caseSelection.length; i++){
    caseSelection[i] 
  }
}
return fullString.join("");
 */

 /* 
for (let i = 0; i > caseSelection.length; i++){
  i === "camel" ? fullString[0] = camelCase(fullString)
  : i === "pascal" ? fullString[0] = pascalCase(fullString)
  : caseSelection[i] === "snake" ? (fullString = snakeCase(fullString))   // SNAKE!!
  : i === "kebab" ? fullString[0] = kebabCase(fullString)
  : i === "title" ? fullString[0] = titleCase(fullString)
  : i++;
} 

for (let i = 0; i > caseSelection.length; i++) {
  i === "vowel" ? fullString[0] = vowelCase(fullString)
: i === "consonant" ? fullString[0] = consonantCase(fullString)
: i++;
}


for (let i = 0; i > caseSelection.length; i++) {
  caseSelection[i] === "upper" ? (fullString = upperCase(fullString))    // UPPER!!!
: i === "lower" ? fullString[0] = lowerCase(fullString)
: i++;
}

return fullString;
 */
