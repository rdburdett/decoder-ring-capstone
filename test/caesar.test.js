// Write your tests here!
const { expect } = require("chai");
var { caesar } = require('../src/caesar')

describe("The function 'caesar'", () => {
  it("should return false if incorrect shift argument is passed", () => {
    const testShifts = [-26, 0, 26, null];
    const actual = testShifts.map((element) => caesar("hello", element, true))
    const expected = [false, false, false, false];
    expect(actual).to.eql(expected);
  });

  it("should ignore capital letters.", () => {
    const actual = caesar("Message", 4, true)
    const expected = caesar("messAge", 4, true)
    expect(actual).to.eql(expected);
  });

  it("when encoding, should handle shifts that go past the end of the alphabet", () => {
    // "z" forward
    const actual1 = caesar("messagez", 3, true)
    const expected1 = "phvvdjhc"
    expect(actual1).to.eql(expected1);

    // "a" backward
    const actual2 = caesar("messagez", -3, true)
    const expected2 = "jbppxdbw"
    expect(actual2).to.eql(expected2);
  });

  it("should maintain spaces and other nonalphabetic symbols in the message, before and after encoding or decoding", () => {
    const actual1 = caesar("message, with spaces!", 5, true)
    const expected1 = "rjxxflj, bnym xufhjx!"
    expect(actual1).to.eql(expected1);

    const actual2 = caesar("rjxxflj, bnym xufhjx!", 5, false)
    const expected2 = "message, with spaces!"
    expect(actual2).to.eql(expected2);
  });
});