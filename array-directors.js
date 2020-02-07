const director = "Steven Spielberg";
const films = ["Jaws", "Raiders of the Lost Ark", "A.I."];

films[2] = "Jurassic Park"; // replace AI with Jurassic Park
console.log(films);
films.push("AI"); // put AI back, to the end of the array (push to last in index)
console.log(films);

films.push("ET"); // add ET to array of films
console.log(director + " is the director of " + films.length + " films."); // prints "Steven Spielberg is the director of 5 films."