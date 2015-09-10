function romanize(number) {
  var numbers = [1000, 500, 100, 50, 10, 5, 1]
  var numerals = ["M", "D", "C", "L", "X", "V", "I"]
  var numberLeft = number;
  var result = "";

  for(var i=0; i < numbers.length; ++i) {

    for(numberLeft; numberLeft >= numbers[i]; numberLeft = numberLeft - numbers[i]) {
      if ((i%2 ===0) && Math.floor(numberLeft / numbers[i]) === 4) {
        result += numerals[i] + numerals[i-1];
        numberLeft -= numbers[i]*((numbers[i-1] / numbers[i]) - 2);
      } else if (numberLeft === 9 || (100 > numberLeft && numberLeft >= 90) || (1000 > numberLeft && numberLeft >= 900)) {
        result += numerals[i+1] + numerals[i-1];
        numberLeft -= 4 * (numbers[i+1]);
      } else {
        result += numerals[i];
      }
    }

  }
  alert("KYLE IS DUMB")
  return result;
};
