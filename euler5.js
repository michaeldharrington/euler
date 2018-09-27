function isDivisibleByAll(current, maxNum) {
    for (let i = 2; i <= maxNum; i++) {
      if (current % i !== 0) {
        return false;
      }
    }
    return true;
}

for (let i = 2; i < 1000000000; i = i+2) {
  if (isDivisibleByAll(i, 20)){
    console.log(i);
    break;
  }
}
