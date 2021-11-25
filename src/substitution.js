// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  // HELPER FUNCTIONS
  function isCharacterALetter(char) {
    return (/[a-zA-Z]/).test(char)
  }

  // Encode
  function encodeME(inputArray, alphabetArray) {
    let outputArray = []
    let encoderTable = {}

    // Build an encoder table
    alphabetArray.forEach((element, i) => {
      encoderTable[String.fromCharCode(i+97)] = element
    })

    // Convert array using table
    inputArray.forEach(element => {
      if (isCharacterALetter(element)) {
        outputArray.push(encoderTable[element])
      } else outputArray.push(element)
    });

    return outputArray.join("")
  }

  // Decode
  function decodeME(inputArray, alphabetArray) {
    let outputArray = []
    let decoderTable = {}

    // Build a decoder table
    alphabetArray.forEach((element, i) => {
      decoderTable[element] = String.fromCharCode(i+97)
    })

    // Convert array using table
    inputArray.forEach(element => {
      if (decoderTable[element]) {
        outputArray.push(decoderTable[element])
      } else outputArray.push(element)
    });

    return outputArray.join("")
  }

  // MAIN FUNCTION
  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if (!alphabet || !input) return false
    let inputArray = input.toLowerCase().split("")
    let alphabetArray = alphabet.toLowerCase().split("")

    // Test arguments
    const distinctLetters = [...new Set(alphabetArray)]
    if ((alphabet.length!==26)||distinctLetters.length<26) return false

    // MAIN return
    return (encode === true) ? encodeME(inputArray, alphabetArray) : decodeME(inputArray, alphabetArray)
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
