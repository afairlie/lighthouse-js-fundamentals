// space(); // takes a (string) {replaces %20 with space, returns as string}
// splitKeyValue(); // receives (string) {return arr with key[0], value[1]}
// splitMultiPairs(); // takes a (string) {returns an array of strings} ex. [ 'city=Vancouver', 'weather=lots%20of%20rain' ]

const urlDecode = function(text) {
  let obj = {};

  if (text.includes("&")){
    let arr = splitMultiPairs(text);

    for (let string of arr){    // looping through strings
      let arrPair = splitKeyValue(space(string));        // save key/value(with spaces) array in arrPair[]
      obj[arrPair[0]] = arrPair[1];       // add key/value to final object
    }
  } else {
    let arrPair = splitKeyValue(space(text));
    obj[arrPair[0]] = arrPair[1];
  }
  return obj;
};

let splitKeyValue = function(text){
  return arr = text.split("=");
}

let space = function(text){
  let arr = text.split("%20");
  return arr.join(" ");
}

let splitMultiPairs = function(text){
  let arrOfArrays = text.split("&");
  return arrOfArrays;
}

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);

/*  EXPECTED OUTPUT 
{duck: "rubber"}
{bootcamp: "Lighthouse Labs"}
{city: "Vancouver", weather: "lots of rain"}
"lots of rain"
 */