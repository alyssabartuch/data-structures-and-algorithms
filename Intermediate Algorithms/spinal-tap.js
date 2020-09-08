function spinalCase(str) {
    let newStr = str.replace(/([a-z])([A-Z])/g, "$1 $2");
    newStr = newStr.replace(/\s+ |_+/g, ' ').split(' ').join('-')
  
    return newStr.toLowerCase();
  }
  
  spinalCase('This Is Spinal Tap');
  spinalCase("The_Andy_Griffith_Show");
  spinalCase("thisIsSpinalTap")
  spinalCase("Teletubbies say Eh-oh")