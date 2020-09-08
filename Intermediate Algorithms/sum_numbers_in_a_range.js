function sumAll(arr) {
    let sortedArr = [...arr].sort((a, b) => a - b);
    let sum = 0;
    for (let i = sortedArr[0]; i <= sortedArr[1]; i++) {
      sum += i
    }
    return sum;
  }
  
  console.log(sumAll([1, 4]))
  console.log(sumAll([4, 1]))
  console.log(sumAll([5, 10]))
  console.log(sumAll([10, 5]))
  