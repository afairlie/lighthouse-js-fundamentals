let talkingCalendar = function(date) {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  let newDate = date.split('/'); // split string to array at "/"s
  
  for (let i = 1; i <= 12; i++){ // loop through numbered months, change to readable month
    if (newDate[1] == i){
      newDate[1] = months[(i-1)];
    }
  }

  const getOrdinal = function(n) { 
    let s=["th,","st,","nd,","rd,"]; // modified ordinal function - put "," at end of ordinal
    if (n[0] === '0'){ // if day starts with 0, remove 0
      n = n[1];
    }
    return n+(s[(n-20)%10]||s[n]||s[0]);
 }
 
 newDate[2] = getOrdinal(newDate[2]);
 newDate[2] = newDate.shift(); // shift year to end of date
  
  return newDate.join(" "); // join array as string with spaces
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));