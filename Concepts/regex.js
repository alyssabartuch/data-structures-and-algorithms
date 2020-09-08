let username = "JackOfAllTrades12";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; // Change this line
let result = userCheck.test(username);
console.log(result)

//------------------------------------------------

let sampleWord = "astronaut";
let pwRegex = /^\D(?=\w{5,})(?=\w*\d{2})/i; // Change this line
let result = pwRegex.test(sampleWord);
console.log(result)