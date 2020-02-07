// Do not modify these first two lines
const iceCreamFlavours = ["chocolate", "vanilla", "cookies and cream", "rocky road", "strawberry"];
console.log(iceCreamFlavours);

// Your code below here...

iceCreamFlavours.push("root beer");
console.log(iceCreamFlavours);

console.log(iceCreamFlavours[0]); // PRINT FIRST ELEMENT in array

console.log(iceCreamFlavours[iceCreamFlavours.length-1]); // PRINT LAST ELEMENT in array
console.log(iceCreamFlavours.slice(-1)[0]) // different way to PRINT LAST ELEMENT: (-1) accesses 1st element from back of index. [0] accesses element at index 0 of the new array slice (which has a length of one = the last element from the original array)

console.log(iceCreamFlavours.length)