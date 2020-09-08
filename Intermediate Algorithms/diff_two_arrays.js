function diffArray(arr1, arr2) {
    let arr1Exclusions = arr2.filter((item) => {
      return arr1.indexOf(item) === -1;
    })
    
    let arr2Exclusions = arr1.filter((item) => {
      return arr2.indexOf(item) === -1;
    })
  
    var newArr = arr1Exclusions.concat(arr2Exclusions);
  
    return newArr;
  }
  
  
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
  
  console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]))