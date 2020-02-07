const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

let i = 0;
let length = ingredients.length;

// Write a while loop that prints out the contents of ingredients:

while (i < length){
  console.log(ingredients[i]);
  i++;
}

// Write a for loop that prints out the contents of ingredients:

for (i = 0 ; i < length; i++){
  console.log(ingredients[i]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:

for (let j = length - 1; j >= 0; j--){
  console.log(ingredients[j]);
}