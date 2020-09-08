// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

function truncateString(str, num) {
    let truncatedString = "";
    if (str.length > num) {
      truncatedString = str.substring(0, num) + "..."
    } else {
      truncatedString = str;
    }
    return truncatedString;
  }
  
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", 50));
  