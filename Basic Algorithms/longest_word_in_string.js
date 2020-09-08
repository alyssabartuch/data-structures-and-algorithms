// Return the length of the longest word in the provided sentence.

// Your response should be a number.

function findLongestWordLength(str) {
    let arr = str.split(' ');
    let longestWordCount = 0; 
    for (let i = 0; i < arr.length; i++) {
        let letterCount = arr[i].length;
        if (letterCount > longestWordCount) {
            longestWordCount = letterCount;
        }
    }

    console.log(longestWordCount)
    return longestWordCount;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");
  