function convertHTML(str) { 
    let html = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      '\'': '&apos;'
    }
  
    let specialChars = [];
    let arr = str.split('');
  
    for (let i = 0; i < arr.length; i++) {
      if (Object.keys(html).includes(arr[i])) {
        specialChars.push({ index: i, char: arr[i] });
      }
    }
  
    for (let j = 0; j < specialChars.length; j++) {
      arr.splice(specialChars[j].index, 1, html[specialChars[j].char])
    }
    
    console.log(arr.join(''))
    return arr.join('');
  }
  
  convertHTML("Dolce & Gabbana");
  convertHTML("Hamburgers < Pizza < Tacos")
  convertHTML("Sixty > twelve")
  convertHTML('Stuff in "quotation marks"')
  convertHTML("Schindler's List")
  convertHTML("<>")
  convertHTML("abc")