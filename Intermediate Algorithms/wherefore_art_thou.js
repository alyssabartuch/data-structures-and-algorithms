function whatIsInAName(collection, source) {
    var arr = [];
    // Only change code below this line
    arr = collection.filter((item) => {
      let matches = 0;
      let sourceKeys = Object.keys(source)
  
      for (let i = 0; i < sourceKeys.length; i++) {
        if (item.hasOwnProperty(sourceKeys[i]) && item[sourceKeys[i]] === source[sourceKeys[i]]) {
            matches += 1;
        }
      }
  
      return matches === sourceKeys.length
    })
    // Only change code above this line
    console.log(arr)
    return arr;
  }
  
  // console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
  // console.log(whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }))
  whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })