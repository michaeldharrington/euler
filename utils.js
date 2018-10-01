const isPrime = num => {
  let sqrtnum = Math.floor(Math.sqrt(num));
  let prime = num != 1;
  for (let i = 2; i < sqrtnum+1; i++) {
    if (num % i === 0) {
      prime = false;
      break;
    } else {
      prime = true;
    }
  }
  return prime;
}
