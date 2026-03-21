function findLastWordLength(word) {
  let lastWordLength = word.trim().split(" ").length - 1;

  return lastWordLength;
}

let length = findLastWordLength("fly me to the moon ");

console.log(length);

function findStringAnagram(str1, str2) {
  let trim1 = str1.trim();
  let trim2 = str2.trim();

  let ch1 = trim1.toLowerCase().split("").sort();
  let ch2 = trim2.toLowerCase().split("").sort();
  for (let i = 0; i < ch1.length; i++) {
    if (ch1[i] !== ch2[i]) return false;
  }
  return true;
}
console.log(findStringAnagram("listen", "silent"));
