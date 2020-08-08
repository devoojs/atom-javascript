function myfun(a, b) {
    if (a === b) {
        return "Different!";
    } else {
        return "Equal!"
    }
}
console.log(myfun(10, 10));




function sum(...theArgs) {
  return theArgs.reduce((num1, num2) => {
    return num1 + num2;
  });
}
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4));
