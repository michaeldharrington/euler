function test(a, b, c){
  let equals = (a*a) + (b*b) === (c*c);
  let is1000 = a + b + c === 1000;
  let solution = equals && is1000;

  if (solution) {
    return true;
  } else {
    return false;
  }
}

function pythagoreanTriplet(){
  const max = 1000;

  for (let a = 1; a < max; a++){
    for (let b = 1; b < max; b++){
      for (let c = 1; c < max; c++){
        if (test(a, b, c) && a !== b) {
          console.log(a, b, c);
          console.log(a*b*c);
        }
      }
    }
  }
}

pythagoreanTriplet();
