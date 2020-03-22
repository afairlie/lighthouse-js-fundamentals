/* 
let arr = ["s", "r", "o", "o", "t", "s"];

for (let i = 0; i < 8; i++){
  if(arr[i] === undefined){
    console.log("worked")
    i++
  } else {
    console.log(arr[i]);
  }
}
 */

squareDims = 4;

let arr =[
["i", "f", "m", "a"], 
["m", "e", "a", "n"], 
["s", "r", "o"]
]

    // arr[x/j][y/i] ex. arr[x0][x0], arr[x1][y0], arr[x2][y0], … at arr[x3][y4] get undefined

let finalArr = [];

for (let y = 0; y<squareDims; y++){
  let intArr = [];
  for (let x = 0; x<arr.length; x++){
    if (arr[x][y] === undefined) {y++} else {
      intArr.push(arr[x][y])
    } 
  }
  finalArr.push(intArr);
}

console.log(finalArr);