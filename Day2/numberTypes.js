let findNumber1 = 5;
let findNumber2 = -2;
let findNumber3 = 0;

console.log(
  `The given number ${findNumber1} is: ${categoriesNumber(findNumber1)}`,
);
console.log(
  `The given number ${findNumber2} is: ${categoriesNumber(findNumber2)}`,
);
console.log(
  `The given number ${findNumber3} is: ${categoriesNumber(findNumber3)}`,
);

function categoriesNumber(num) {
  if (num > 0) return "positive";
  if (num < 0) return "negative";
  else return "neutral";
}
