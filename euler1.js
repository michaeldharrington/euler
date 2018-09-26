function euler1(){
  arr = [];
  let limit = 1000;
  const reducer = (a, b) => a + b;
  for (let i = 1; i < limit; i++){
    if (i % 3 == 0 || i % 5 == 0) {
      arr.push(i);
    }
  }
  console.log(arr.reduce(reducer));
}

euler1();
