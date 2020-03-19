let calculateChange = function(total, cash) {
  let change = cash-total;
  let changeDue = {};

  const checkKey = function(string){
    if (!(string in changeDue)){
      changeDue[string] = 0;
    }
  }

  for (change; change > 0;){

    if (change - 2000 >= 0){ // 2000 ($20.00)
      checkKey("twentyDollars")
      changeDue.twentyDollars += 1;
      change -= 2000;
    } else if (change - 1000 >= 0){ // 1000 ($10.00)
      checkKey("tenDollars")
      changeDue.tenDollars += 1;
      change -= 1000;
    } else if (change - 500 >= 0){ // 500 ($5.00)
      checkKey("fiveDollars")
      changeDue.fiveDollars += 1;
      change -= 500;
    } else if (change - 200 >= 0){ // 200 ($2.00)
      checkKey("twoDollars")
      changeDue.twoDollars += 1;
      change -= 200;
    } else if (change - 100 >= 0){ // 100 ($1.00)
      checkKey("oneDollar")
      changeDue.oneDollar += 1;
      change -= 100;
    } else if (change - 25 >= 0){ // 25 ($0.25)
      checkKey("quarter")
      changeDue.quarter += 1;
      change -= 25;
    } else if (change - 10 >= 0){ // 10 ($0.10)
      checkKey("dime")
      changeDue.dime += 1;
      change -= 10;
    } else if (change - 5 >= 0){ // 5 ($0.05)
      checkKey("nickel")
      changeDue.nickel += 1;
      change -= 5;
    } else { // 1 ($0.01)
      checkKey("penny")
      changeDue.penny += 1;
      change -= 1;
    } 
  } 

  return changeDue;
};

// console.log(calculateChange(5, 24))


console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));

/* 
{ twoDollar: 1, dime: 1, penny: 3 }
{ tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
{ twoDollar: 2, quarter: 3, dime: 2, penny: 4 } 
*/