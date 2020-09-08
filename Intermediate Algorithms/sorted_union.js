function uniteUnique(arr) {
    let values = [...arguments];
    let unique = [];
    for (let i = 0; i < values.length; i++) {
      for (let j = 0; j < values[i].length; j++) {
        if (!unique.includes(values[i][j])) {
          unique.push(values[i][j])
        }
      }
    }
    return unique;
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
  uniteUnique([1, 2, 3], [5, 2, 1]);
  uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);
  