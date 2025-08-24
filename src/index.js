module.exports = function toReadable(number) {
  const numbers = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  const numbersTeens = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  const numberTys = [
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  const hundreds = 'hundred';
  if (number < 10) {
    return numbers[number];
  }

  if (number < 20) {
    return numbersTeens[number - 10];
  }

  const hundred = Math.floor(number / 100);
  const digit = number % 10;
  const tys = Math.floor((number % 100) / 10);

  const hund1 =
    hundred === 1 ? `one ${hundreds} ` : `${numbers[hundred]} ${hundreds} `;
  const hunds = hundred ? hund1 : '';
  const ten1 = tys === 1 ? `${numbersTeens[digit]} ` : `${numberTys[tys - 2]} `;
  const tens = tys ? ten1 : '';
  return `${hunds}${tens}${tys !== 1 && digit ? numbers[digit] : ''}`.trim();
};
