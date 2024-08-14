function firstWord(s) {
  // your code here
  s = s.trim(); // Remove leading and trailing spaces
  let words = s.split(" "); // Split by spaces
  return words[0];
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
