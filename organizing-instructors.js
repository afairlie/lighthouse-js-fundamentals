const organizeInstructors = function(instructors) {
  let obj = {}

  for (instructor of instructors){
    if (!(instructor.course in obj)){
      obj[instructor.course] = [];
    }  // if instructor.course ! in obj {add obj[course] = []}
    obj[instructor.course].push(instructor.name); // obj.course.push(instructor.name)
  }
  return obj;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));

/* 
{
  iOS: ["Samuel"],
  Web: ["Victoria", "Karim", "Donald"]
}
{
  Blockchain: ["Brendan"],
  Web: ["David", "Carlos"],
  iOS: ["Martha"]
} 
*/