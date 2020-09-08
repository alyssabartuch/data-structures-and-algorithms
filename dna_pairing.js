function pairElement(str) {
  let dnaPairs = [
    ['A', 'T'],
    ['T', 'A'], 
    ['C', 'G'], 
    ['G', 'C']
  ]

  let pairsArr = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < dnaPairs.length; j++) {
      if (str[i] === dnaPairs[j][0]) {
        pairsArr.push(dnaPairs[j])
      }
    }
  }

  return pairsArr;
}
console.log(pairElement("TTGAG"))
pairElement("GCG");





function pairElement(str) {
    let dnaPairs = [
      ['A', 'T'],
      ['T', 'A'], 
      ['C', 'G'], 
      ['G', 'C']
    ]
  
    let pairsArr = [];
  
    for (let i = 0; i < str.length; i++) {
      for (let j = 0; j < dnaPairs.length; j++) {
        if (str[i] === dnaPairs[j][0]) {
          pairsArr.push(dnaPairs[j])
        }
      }
    }
  
    return pairsArr;
  }
  console.log(pairElement("TTGAG"))
  pairElement("GCG");
  