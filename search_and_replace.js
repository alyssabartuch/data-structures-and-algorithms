function myReplace(str, before, after) {
    let strArr = str.split(' ');
    let strIndex = strArr.indexOf(before)
    if (before.match(/^[A-Z]/) ) {
      let capital = after[0].toUpperCase()
      after = after.replace(/(^[a-zA-Z])/, capital);
    } else {
      let lowerCase = after[0].toLowerCase();
      after = after.replace(/(^[a-zA-Z])/, lowerCase)
    }
    strArr.splice(strIndex, 1, after)
    str = strArr.join(' ');  
    console.log(str)
    return str;
  }
  
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
  myReplace("He is Sleeping on the couch", "Sleeping", "sitting")
  myReplace("I think we should look up there", "up", "Down")