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







/*
const smallestMultiple = n => {
  let nums = [];

  for (let i = 0; i <= n; i++) {
    if (i % i == 0) {
      nums.push(i);
    }
  }

  for (let n in nums){
    nums[n] = answer/nums[n];
    if (nums[n]) {
      console.log("True");
    }
  }

  console.log(nums);

  return nums;
}
*/
