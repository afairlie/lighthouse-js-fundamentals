const instructorWithLongestName = function(instructors) {
  let longestName = instructors[0];
  // loop through instructors array
  for (let i = 1; i < instructors.length; i++){
    // check if ith object name is longer than 1st object in array
    if (instructors[i].name.length > longestName.name.length){
      // if it is, make longestName the ith object
      longestName = instructors[i]
    }
  }
  // return the object with the longest name
  return longestName;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));