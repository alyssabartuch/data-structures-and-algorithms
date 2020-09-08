// Check if a string (first argument, str) ends with the given target string (second argument, target).

// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

function confirmEnding(str, target) {
    let start = str.length - target.length;
    let ending = str.slice(start);
    return ending === target;
  }
  
  confirmEnding("Bastian", "n");
  confirmEnding("Congratulation", "on");confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification");