
const biggestPals = num => {
  let ans = 0;
  for (let i = 100; i < 1000; i++){
      for (let j = 100; j < 1000; j++){
        let a = (i * j).toString();
        let isPal = a.split("").reverse().join("");
        if (a == isPal){
          a = parseInt(a);
          if(a > ans){
            ans = a;
          }
        }
      }
  }
  return ans;
}

console.log(biggestPals());
