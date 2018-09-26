function fib() {
  let arr = [];
  let evens =[];
  let limit = 4000000;

  arr[0] = 0;
  arr[1] = 1;
  for (i = 2; i <= 35; i++) {
    // How would I check if the value of arr[i] does not exceed 4000000
    arr[i] = arr[i - 2] + arr[i - 1];
    if (arr[i] % 2 == 0 && arr[i] <= limit) {
      evens.push(arr[i]);
    }
  }
  console.log("Evens:" + evens);
  console.log("Value: " + evens.reduce(function reducer(a, b){return a + b}));
}

fib()
