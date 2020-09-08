// Reverse the provided string.
// You may need to turn the string into an array before you can reverse it.
// Your result must be a string.

function reverseString(str) {
    let stringArr = []; 
    for (let i = 0; i < str.length; i++) {
        stringArr.push(str[i]);
    }
    let reversedStr = stringArr.reverse()
    return reversedStr.join('');
  }
  
  console.log(reverseString("hello"));
  console.log(reverseString("Greetings from Earth"));
  