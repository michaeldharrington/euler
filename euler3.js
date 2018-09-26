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

const primeFactor = num => {
  let factors = [];

  for (var i = 600851475143; i > 600800000000; i--){
    if (isPrime(i) != false) {
      factors.push(i);
      break
    }
  }
  console.log(isPrime(factors[0]));
  console.log(factors);
}

const solution = n => {
  let i = 2;
  while(i * i < n) {
    while(n % i === 0) {
      n /= i;
    }
    i++;
  }
  return n;
};
console.log(solution(600851475143));
