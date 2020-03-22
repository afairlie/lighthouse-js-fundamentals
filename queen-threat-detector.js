const generateBoard = function(whiteQueen, blackQueen) {
  let arr = [];

  for (let i = 0; i < 8; i++){    // generate blank array
    let intArray = []
    for (let j = 0; j < 8; j++){
      intArray.push(0);
    }
    arr.push(intArray)
  }

  arr[whiteQueen[0]][whiteQueen[1]] = 1;    // place queens
  arr[blackQueen[0]][blackQueen[1]] = 1;

  return arr;
}

const queenThreat = function(arr){
  let queens = [];    // array to hold queen locations
  let threat = false;     // set threat default to false

  for (let i = 0; i < arr.length; i++){     // find queens in array of arrays (generated array)
    for (let j = 0; j < arr[i].length; j++){
      if (arr[i][j]===1){
        queens.push([i, arr[i].indexOf(1)])
      }
    }
  }

  let queenOne = queens[0];     // set queens
  let queenTwo = queens[1];

  if (queenOne[0] === queenTwo[0]){     // if queens on same vertical axis, change threat to true
    threat = true;
  }
  if (queenOne[1] === queenTwo[1]){     // if queens on same horizontal axis, change threat to true
    threat = true;
  }

  // *** queenOne will always be above queenTwo because she's found first. Else, if looking for other queen anywhere on board, would need 4 loops, for coordinates x-- (anything vertical above queenOne)

  let x = queenOne[0];      // set x (vertical) starting coordinates from queen one
  let y = queenOne[1];      // set y (horizontal) starting coordinates from queen one
  for (let i = 0; i < (7-queenOne[1]); i++) {     // iterate through valid x, y coordinates
    x++;
    y++;
    if (queenTwo[0] === x && queenTwo[1] === y){      // if queenTwo x, y coordinates match, change threat to true
      threat = true;
    }
  }

  x = queenOne[0];
  y = queenOne[1];
  for (let i = 0; i < queenOne[1]; i++) {     // iterate through valid x, y coordinates, other axis
    x++;
    y--;
    if (queenTwo[0] === x && queenTwo[1] === y) {   // if queenTwo x, y coordinates match, change threat to true
      threat = true;
    }
  }

  return threat;
}

// test cases
let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

whiteQueen = [0, 0];
blackQueen = [5, 7];
generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));