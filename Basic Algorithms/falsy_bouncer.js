// Remove all falsy values from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// Hint: Try converting each value to a Boolean.

function bouncer(arr) {
    let truthyArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]) {
        truthyArr.push(arr[i]);
      }
    }
    return truthyArr;
  }
  
  bouncer([7, "ate", "", false, 9]);
  bouncer(["a", "b", "c"]);
  bouncer([false, null, 0, NaN, undefined, ""]);
  bouncer([null, NaN, 1, 2, undefined]);