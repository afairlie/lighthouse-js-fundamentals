let arr = [     // TEST ARRAY
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
];

const queenThreat = function(arr){
  let queens = [];
  let threat = false;

  for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr[i].length; j++){
      if (arr[i][j]===1){
        queens.push([i, arr[i].indexOf(1)])
      }
    }
  }

  let queenOne = queens[0]; // [0, 5]
  let queenTwo = queens[1]; // [5, 0]


      // ULTIMATELY return true or false
  return queens;
}

console.log(queenThreat(arr));

/* 
let whiteQueen = [0, 5];
let blackQueen = [5, 0];

const queenThreat = function(){
  // NEXT TO DO: loop through arr of array (square loop) if 1 return indexOf to array of (two) arrays? rename queenOne = arr[0], queenTwo = arr[1]

}

console.log(queenThreat(whiteQueen, blackQueen));

whiteQueen = [0, 0];
blackQueen = [5, 7];

console.log(queenThreat(whiteQueen, blackQueen)); 
*/

/* 
let queenOne = whiteQueen;
let queenTwo = blackQueen;
let answer = false;

for (let i = 0; i < 8; i++){
  console.log([queenTwo[0], queenOne[0]+i, queenTwo[1], queenOne[1]+i])
  console.log([queenTwo[0], queenOne[0]-i, queenTwo[1], queenOne[1]-i])
  console.log([queenTwo[0], queenOne[0]+i, queenTwo[1], queenOne[1]-i])
  console.log([queenTwo[0], queenOne[0]-i, queenTwo[1], queenOne[1]+i])
  
  if ((queenTwo[0] === queenOne[0]+i) && (queenTwo[1] === queenTwo[1]+i)) {
    console.log([queenTwo[0], queenOne[0]+i, queenTwo[1], queenOne[1]+i])
    answer = true;
  } else if ((queenTwo[0] === queenOne[0]-i) && (blackQueen[1] === queenTwo[1]-i)) {
    console.log([queenTwo[0], queenOne[0]-i, queenTwo[1], queenOne[1]-i])
    answer = true;
  }  else if ((queenTwo[0] === queenOne[0]+i) && (queenTwo[1] === queenTwo[1]-i)) {
    console.log([queenTwo[0], queenOne[0]+i, queenTwo[1], queenOne[1]-i])
    answer = true;
  } else if ((queenTwo[0] === queenOne[0]-i) && (blackQueen[1] === queenTwo[1]+i)) {
    console.log([queenTwo[0], queenOne[0]-i, queenTwo[1], queenOne[1]+i])
    answer = true;
  } 
}
return answer;
 */