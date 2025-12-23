const charsArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "\\",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
  " ",
];

// Change length of text cyclically
function changeLength(text, length) {
  const textArray = text.split("");
  const outputArray = [];

  let index = 0;
  for (let i = 0; i < length; i++) {
    if (index >= text.length) {
      index = 0;
    }
    outputArray.push(textArray[index]);
    index++;
  }

  return outputArray.join("");
}

// Get indexes of each character and return array
function getIndexes(text) {
  const textArray = text.split("");
  const outputArray = [];

  textArray.forEach((char) => {
    outputArray.push(charsArray.indexOf(char));
  });
  return outputArray;
}

function encrypt(text, key) {
  const textIndexes = getIndexes(text);
  const adjustedKey = changeLength(key, text.length);
  const keyIndexes = getIndexes(adjustedKey);
  const outputArray = [];

  for (let i = 0; i < text.length; i++) {
    let index = textIndexes[i] + keyIndexes[i] + key.length + 1;
    // Index out of range fix
    while (index >= charsArray.length) {
      index -= charsArray.length;
    }
    outputArray.push(charsArray[index]);
  }

  return outputArray.join("");
}

function decrypt(text, key) {
  const textIndexes = getIndexes(text);
  const adjustedKey = changeLength(key, text.length);
  const keyIndexes = getIndexes(adjustedKey);
  const outputArray = [];

  for (let i = 0; i < text.length; i++) {
    let index = textIndexes[i] - keyIndexes[i] - key.length - 1;
    // Index out of range fix
    while (index < 0) {
      index += charsArray.length;
    }
    outputArray.push(charsArray[index]);
  }

  return outputArray.join("");
}

export { encrypt, decrypt };
