// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

function getIndexToIns(arr, num) {
    let insertionIndex = 0;
    let sortedArr = arr.sort(function(a, b){return a - b});
    for (let i = 0; i < sortedArr.length; i++) {
      if (sortedArr[i] <= num) {
        insertionIndex = i; 
      }
      if (sortedArr[i] >= num && sortedArr[i-1] < num) {
          insertionIndex = i;
      }
    }
    console.log(insertionIndex)
    return insertionIndex;
  }
  
  getIndexToIns([10, 20, 30, 40, 50], 35);
  getIndexToIns([40, 60], 50);
  getIndexToIns([1,2,3,4], 1.5);
  getIndexToIns([10, 20, 30, 40, 50], 30);
  getIndexToIns([3, 10, 5], 3);
  getIndexToIns([], 1);


  // function getIndexToIns(arr, num) {
//   let insertionIndex = 0;
//   let sortedArr = arr.sort(function(a, b){return a - b});
//   for (let i = 0; i < sortedArr.length; i++) {
//     if (sortedArr[i] <= num) {
//       insertionIndex = i; 
//     }
//     if (sortedArr[i] >= num && sortedArr[i-1] < num) {
//         insertionIndex = i;
//     }
//   }
//   console.log(insertionIndex)
//   return insertionIndex;
// }

function getIndexToIns(arr, num) {
    arr.sort(function(a, b) {
      return a - b;
    });
  
    for (var a = 0; a < arr.length; a++) {
      if (arr[a] >= num) return a;
    }
  
    return arr.length;
  }
  
  // getIndexToIns([10, 20, 30, 40, 50], 35);
  // getIndexToIns([40, 60], 50);
  // getIndexToIns([1,2,3,4], 1.5);
  // getIndexToIns([10, 20, 30, 40, 50], 30);
  // getIndexToIns([3, 10, 5], 3);
  // getIndexToIns([], 1);
  getIndexToIns([2, 5, 10], 15);