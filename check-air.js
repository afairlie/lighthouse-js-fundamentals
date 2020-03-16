const checkAir = function (samples, threshold) {
  let dirtyCount = 0;

  for (let sample of samples){
    sample === 'dirty' ? dirtyCount++
    : false;
  }
  
  return (dirtyCount / samples.length) < threshold ? "Clean"
  : "Polluted";
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))