function fearNotLetter(str) {
    let missingCode = 0;
    let prevCode = 0;
  
    for (let i = 0; i < str.length; i++) {
      if (i !== 0) {
        if (str.charCodeAt(i) !== prevCode + 1) {
          missingCode = prevCode + 1;
        }
      }
      prevCode = str.charCodeAt(i);
    }
  
    return (missingCode > 0) ? String.fromCharCode(missingCode) : undefined;
  }
  
  console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));
  console.log(fearNotLetter("abce"));
  