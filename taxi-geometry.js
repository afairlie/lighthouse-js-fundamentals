const blocksAway = function(directions) {
let northCount = 0;   
let eastCount = 0;
let southCount = 0;
let westCount = 0;

const drive = function (degree, direction, blocks){     // function receives degree taxi is facing, direction to go, number of blocks, returns new degree car facing. In relation to rest of function, direction = move[0], blocks = move[1]
  if (direction === "right"){
    degree = ((degree % 360)+90);
  } else if (direction === "left"){
    degree = ((degree % 360)-90);
  }

  // north is 0 || 360 || -360, east is 90 || -270, south is 180 || -180, west is 270 || -90
  if (degree === 90 || degree === -270){
    eastCount += blocks;
  } else if (degree === 180 || degree === -180){
    southCount += blocks;
  } else if (degree === 270 || degree === -90){
    westCount += blocks;
  } else {
    northCount += blocks;
  }
  return degree;
}

let moves = [];
for (let i = 0; i < directions.length; i+2){    
  moves.push(directions.splice(i, 2))     // moves.push arrays of [direction, blocks] instruction pairs
}

if (moves[0][0] === "right"){   // if first move is right, starting degree must be 0, ie taxi starting position facing "north"
  let degree = 0;
  for (let move of moves){
    degree = drive(degree, move[0], move[1])
  }
} else {
  let degree = 90;    // if first move is left, starting degree must be 90, ie taxi starting position facing "east"
  for (let move of moves){
    degree = drive(degree, move[0], move[1])
  }
}

  // RETURN AN OBJECT w/ north: blocks, east: blocks]
  return obj = {
    east: (eastCount - westCount),
    north: (northCount - southCount)
  };
};

// TEST CASES
console.log(blocksAway(["right", 2, "left", 3, "left", 1,]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));

// EXPECTED OUTPUT
/* 
{ east: 1, north: 3 }
{ east: 3, north: 3 }
{ east: 0, north: 0 }
 */

// EXTRA TEST CODE
// console.log(blocksAway(["right", 2]));
// console.log(blocksAway(["left", 1,]));

// console.log(blocksAway(["right", 1, "right", 1, "right", 1, "right", 1, "right", 1, "right", 1, "right", 1]));
// console.log("//");
// console.log(blocksAway(["left", 1, "left", 1, "left", 1, "left", 1, "left", 1, "left", 1, "left", 1]));
// console.log("//");