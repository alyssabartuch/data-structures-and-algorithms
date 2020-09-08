// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.

function repeatStringNumTimes(str, num) {
    let repeatedArr = [];
    let repeatedString = '';
    for (let i = 0; i < num; i++) {
      repeatedArr.push(str);
    }
    repeatedString = repeatedArr.join('');
    return repeatedString;
  }
  
  console.log(repeatStringNumTimes("abc", -3));
  