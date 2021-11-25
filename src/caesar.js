// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  
    // Helper function
  function shiftAsciiArray (array, shift, encode) {
 
    // if encode is false, invert shift
    (encode === true) ? shift : shift*= -1

    // Shift ASCII array when it contains a-z letters
    let shiftedAsciiArray = array.map(element => {
      // Check if element is a-z
      if(element>=97 && element<=122) {
        let smallShiftedElement = element - 97 + shift
        // Correct shift if out of 0-26 bounds
        if(smallShiftedElement>25) {
          smallShiftedElement -= 26
        } else if (smallShiftedElement<0) {
          smallShiftedElement += 26
        }
        // Return to standard ASCII
        return smallShiftedElement + 97
      } else {
        return element
      }
    })
    return shiftedAsciiArray
  }

  function caesar(input, shift, encode = true) {
    // your solution code here
    
    // Check shift for validity
    if (!shift || shift<-25 || shift>25 || shift === 0) return false

    // Convert string input to lowercase array
    let inputAsArray = input.toLowerCase().split("")

    // Convert array to ASCII values
    let asciiArray = []
    inputAsArray.forEach(element => asciiArray.push(element.charCodeAt(0)))

    // Shift array
    let shiftedAsciiArray = shiftAsciiArray(asciiArray, shift, encode)

    // Convert array to strings
    let shiftedStringArray = []
    shiftedAsciiArray.forEach(element => shiftedStringArray.push(String.fromCharCode(element)))

    // Rejoin array into string
    let shiftedString = shiftedStringArray.join("")

    // Function output
    return shiftedString
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };