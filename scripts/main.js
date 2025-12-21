import * as kc from "./k-cipher.js";

const textInputElem = document.querySelector("#text-input");
const keyInputElem = document.querySelector("#key-input");
const outputElem = document.querySelector("#output");

// Encrypt
document.querySelector("#encrypt-button").addEventListener("click", () => {
  const text = textInputElem.value;
  const key = keyInputElem.value;

  if (!text || !key) {
    alert("Text or Key is empty.");
  } else {
    const encryptedText = kc.encrypt(text, key);
    outputElem.value = encryptedText;
  }
});

// Decrypt
document.querySelector("#decrypt-button").addEventListener("click", () => {
  const text = textInputElem.value;
  const key = keyInputElem.value;

  if (!text || !key) {
    alert("Text or Key is empty!");
  } else {
    const decryptedText = kc.decrypt(text, key);
    outputElem.value = decryptedText;
  }
});

// Clear
document.querySelector("#clear-button").addEventListener("click", () => {
  textInputElem.value = "";
  keyInputElem.value = "";
  outputElem.value = "";
});

// Copy
document.querySelector("#copy-button").addEventListener("click", () => {
  const text = outputElem.value;

  if (!text) {
    alert("Output is empty!");
  } else {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("Output copied!");
      })
      .catch((err) => {
        console.error("Error is copying text: ", err);
      });
  }
});
