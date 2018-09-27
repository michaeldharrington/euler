function sumSquareDifference(){
  const sum = (a, b) => a + b;
  let natNumbs = [];
  let natNumbsSquared = [];
  for (let i = 1; i <= 100; i++) {
    natNumbs.push(i);
    natNumbsSquared.push(i*i);
  }
  let sumSquares = natNumbsSquared.reduce(sum);
  let squareSum = (natNumbs.reduce(sum)) * (natNumbs.reduce(sum));
  let solve = squareSum-sumSquares;
  console.log(solve);
}

sumSquareDifference();
