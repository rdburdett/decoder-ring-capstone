// Write your tests here!

const { expect } = require("chai");
var { polybius } = require('../src/polybius')

describe("The function 'polybius'", () => {
  it("when encoding, should translate the letters i and j to 42", () => {
    const actual = polybius("ij", encode = true);
    const expected = "4242";
    expect(actual).to.equal(expected);
  });
  it("when decoding, should translate 42 to (i/j)", () => {
    const actual = polybius("42", encode = false)
    const expected = "(i/j)";
    expect(actual).to.eql(expected);
  });
  it("should ignore capital letters", () => {
    const actual = polybius("Message", encode = true)
    const expected = polybius("message", encode = true)
    expect(actual).to.eql(expected);
  });
  it("should maintain spaces in the message, before and after encoding", () => {
    const actual1 = polybius("message with spaces", encode = true)
    const expected1 = "23513434112251 25424432 345311315134"
    expect(actual1).to.eql(expected1);

    const actual2 = polybius("23513434112251 25424432 345311315134", encode = false)
    const expected2 = "message w(i/j)th spaces"
    expect(actual2).to.eql(expected2);
  });
});