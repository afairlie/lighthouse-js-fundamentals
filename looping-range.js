const range = function(start, end, step){
  const arr = [];
  if (start === undefined || end === undefined || step === undefined || start > end || step <= 0){
    return arr;
  } else {
    for (let i = start; i <= end; i += step){ // notes: remember += so no infinite loop
      arr.push(i);
    }
    return arr;
  }
}

console.log(range(0, 8, 2));
console.log(range(10, 30, 5));
console.log(range(-9, 3, 3));