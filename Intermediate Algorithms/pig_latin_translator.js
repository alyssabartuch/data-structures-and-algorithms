function translatePigLatin(str) {
    let pigLatin = '';
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let strArr = str.split('')
    let firstVowelIndex;
    let startsWithConsonant = false;
  
    for (let i = 0; i < strArr.length; i++) {
      let isVowel = vowels.includes(strArr[i]);
  
      if (i === 0 && !isVowel) {
        startsWithConsonant = true;
      } else if (isVowel && firstVowelIndex === undefined) {
        firstVowelIndex = i
      }
    }
  
    if (startsWithConsonant && firstVowelIndex !== undefined) {
      let startSubStr = strArr.slice(0, firstVowelIndex).join('')
      let subStr = strArr.splice(firstVowelIndex).join('')
      pigLatin = subStr.concat(startSubStr, 'ay') 
    } else if (firstVowelIndex === 0) {
      pigLatin = strArr.join('').concat('way')
    } else {
      pigLatin = str.concat('ay');
    }
  
    return pigLatin;
  }
  
  console.log(translatePigLatin("rhythm"))
  // translatePigLatin("california")
  // translatePigLatin("algorithm")
  translatePigLatin("schwartz")
  // translatePigLatin("consonant");
  