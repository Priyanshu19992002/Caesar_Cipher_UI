/**
 * provide text and shift(here for caeser cipher shift=3) it returns the encrypted text
 * @param {String} text //(text is string type variable)
 * @param {Number} shift //(shift is a int type variable)
 */

//Provide the normal text and it will return the encrypted text
const encrypt = function (text, shift) {
  let encText = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i] >= "Z") {
      let c = ((text.charCodeAt(i) - 97 + shift + 26) % 26) + 97;
      encText += String.fromCharCode(c);
    } else if (text[i] >= "A" && text[i] <= "Z") {
      let c = ((text.charCodeAt(i) - 65 + shift + 26) % 26) + 65;
      encText += String.fromCharCode(c);
    } else {
      encText += text[i];
    }
  }
  return encText;
};

//provide encrypted text and it will return decrypted text
const decrypt = function (text, shift) {
  return encrypt(text, -1*shift);
};


// select the encrypt text area and decrypt text area
const enc = document.querySelector(".encpt-textarea");
const dec = document.querySelector(".decpt-textarea");


//get current text and encrypt it and update the text fields
dec.addEventListener("input", (e) => {
  let et = encrypt(e.target.value, 3);
  enc.value=et;
  //console.log(enc.innerHTML);
});


//get current text and decrypt it and update the text fields
enc.addEventListener("input", (e) => {
    let dc = decrypt(e.target.value, 3);
    dec.value = dc;
    //console.log(dec.innerHTML);
});
  
  