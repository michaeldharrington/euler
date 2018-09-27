// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13,
// we can see that the 6th prime is 13.

// What is the 10 001st prime number?

function isPrime(num) {
  if (num < 2) return false;
  let sqrtnum = Math.floor(Math.sqrt(num));
  for (let i = 2; i < sqrtnum+1; i++){
    if (num%i==0){
      return false
    }
  }
  return true;
}

let primes = [];

for (let i = 0; i < 500000; i++){
  if(isPrime(i)){
    primes.push(i);
  }
}

console.log(primes[10000]);
