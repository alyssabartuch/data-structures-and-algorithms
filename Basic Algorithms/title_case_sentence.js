// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

function titleCase(str) {
    let newStrArr = [];
    let strArr = str.split(' ')
    for (let i = 0; i < strArr.length; i++) {
      // console.log(strArr[i])
      let newWord = replaceCapital(strArr[i]) 
      newStrArr.push(newWord)
    }
  
    let newStr = newStrArr.join(' ');
    return newStr;
  }
  
  function replaceCapital(word) {
    // console.log(word)
    let update = word.slice(1);
    return word[0].toUpperCase() + update.toLowerCase()
  }
  
  console.log(titleCase("I'm a little tea pot"));
  console.log(titleCase("sHoRt AnD sToUt"));