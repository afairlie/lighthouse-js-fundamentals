const fruits = ["apple", "orange", "pear", "fig"];

console.log(fruits);

fruits[0, 2] = "grapefruit", "pomegranite"; //adds "grapefruit" to index 2 (doesn't read 0, or "pomegranite")

console.log(fruits);
console.log(fruits.reverse()); // reverse is destructive, but will it just print?
console.log(fruits); //nope, the array is permanently reversed, even if called in console.log