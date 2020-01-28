const howManyHundreds = function (num) {
  if (num > 99){
    if (num % 100 !== 0){
      return ((num - (num % 100)) / 100);
    } else {
      return num / 100;
    }
  } else {
    return 0;
  }
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);