const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function getLettersInBinary(expr) {
    let arr = [];
    for (let index = 0, step = 10; index < expr.length; index += step) {
        arr.push(expr.substring(index, index + step));
    }
    return arr;
  }
  
  function getLettersInMorse(arrBinaryLetters) {
    let arrMorseLetters = [];
    let dotCode = '10';
    let dashCode = '11';
    let spaceCode = '**********';
    for (let index = 0; index < arrBinaryLetters.length; index++) {
      if (arrBinaryLetters[index] == spaceCode) {
        arrMorseLetters.push(' ');
      } else {
        let morseLetter = '';
        for (let kIndex = 0, step = 2; kIndex < arrBinaryLetters[index].length; kIndex += step) {
          let twoElemStr = arrBinaryLetters[index].substring(kIndex, kIndex + step);
          if (twoElemStr == dotCode) {
            morseLetter += '.';
          } else if (twoElemStr == dashCode) {
            morseLetter += '-';
          }
        }
        arrMorseLetters.push(morseLetter);
      }
    }
    return arrMorseLetters;
  }
  
  function getAlphabeticalString(arrMorseLetters) {
    let resultStr = '';
    for (let index = 0; index < arrMorseLetters.length; index++) {
      if (arrMorseLetters[index] == ' ') {
        resultStr += arrMorseLetters[index];
      } else {
        resultStr += MORSE_TABLE[arrMorseLetters[index]];
      }
    }
    return resultStr;
  }
  
  function decode(expr) {
    let arrBinaryLetters = getLettersInBinary(expr);
    let arrMorseLetters = getLettersInMorse(arrBinaryLetters);
    let result = getAlphabeticalString(arrMorseLetters);
    return result;
  }

module.exports = {
    decode
}