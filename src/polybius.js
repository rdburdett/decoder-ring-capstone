// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  const decodeKey = {
    11:"a", 21:"b", 31:"c", 41:"d", 51:"e", 
    12:"f", 22:"g", 32:"h", 42:"(i/j)", 52:"k", 
    13:"l", 23:"m", 33:"n", 43:"o", 53:"p", 
    14:"q", 24:"r", 34:"s", 44:"t", 54:"u", 
    15:"v", 25:"w", 35:"x", 45:"y", 55:"z"
  }

  const encodeKey = {
    a:"11", b:"21", c:"31", d:"41", e:"51", 
    f:"12", g:"22", h:"32", i:"42", j:"42", k:"52", 
    l:"13", m:"23", n:"33", o:"43", p:"53", 
    q:"14", r:"24", s:"34", t:"44", u:"54", 
    v:"15", w:"25", x:"35", y:"45", z:"55"
  }

  ////////////////////////////////
  function isCharacterALetter(char) {
    return (/[a-zA-Z]/).test(char)
  }

  // ENCODER HELPER FUNCTION
  function encodeME(inputString) {
    // split every one
    let slicedArray = inputString.match(/.{1}/g)
    let outputArray = []
    slicedArray.forEach(element => {
      (isCharacterALetter(element)) ? 
      outputArray.push(encodeKey[element]) :
      outputArray.push(element)
    });
    let output = outputArray.join("")
    return output
  }

  // DECODER HELPER FUNCTION
  function decodeME(inputNumber){
    let outputArray = []
    regSplitArray = inputNumber.split(/([?:;|$\s])/)
    if (regSplitArray.some((element) => (element.length%2 !== 0 && element.length > 1))) {
      return false
    }
    regSplitArray.forEach(element => {
      let currentWordArray = element.match(/.{1,2}/g)
      let currentWord = ""    
      if (element.length > 1) {
        currentWordArray.forEach(element => {
          currentWord += decodeKey[element]
        });
      } else currentWord = element

      outputArray.push(currentWord)
    });
    let output = outputArray.join("")
    return output
  }

  ////////////////////////////////
  
  // MAIN FUNCTION
  function polybius(input, encode = true) {
    // your solution code here
    return (encode === true) ? encodeME(input.toLowerCase()) : decodeME(input)
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
