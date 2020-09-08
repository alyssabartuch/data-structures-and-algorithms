function destroyer(arr, ...removeValues) {
    return arr.filter((item) => {
      return !removeValues.includes(item);
    });
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
