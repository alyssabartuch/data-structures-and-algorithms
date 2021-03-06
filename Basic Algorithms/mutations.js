// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

function mutation(arr) {
    let string1 = arr[0].toLowerCase();
    let string2 = arr[1].toLowerCase();
    let answer = true;
    for (let i = 0; i < string2.length; i++) {
      if (!string1.includes(string2[i])) {
        answer = false;
      }
    }
    return answer;
  }
  
  mutation(["hello", "hey"]);
  mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);
  mutation(["Mary", "Army"]);
  mutation(["Alien", "line"])
  mutation(["hello", "neo"])
  mutation(["Tiger", "Zebra"])
  mutation(["Noel", "Ole"])