// Write your tests here!

const { expect } = require("chai");
var { substitution } = require('../src/substitution')

describe("The function 'substitution'", () => {
  it("should return false if the given alphabet isn't exactly 26 characters long", () => {
    const actual = substitution("hello", "anbeiakdj", true);
    expect(actual).to.be.false;
  });

  it("should correctly translate the given phrase, based on the alphabet given to the function", () => {
    const actual = substitution("message", "aldp?krbyjeqsgmxotwchunfiv", true);
    const expected = "s?wwar?"
    expect(actual).to.eql(expected);
  });

  it("should return false if there are any duplicate characters in the given alphabet", () => {
    const actual = substitution("hello", "aadp?krbyjeqsgmxotwchunfiv", true);
    expect(actual).to.be.false;
  });

  it("should maintain spaces in the message, before and after encoding or decoding", () => {
    // before
    const actual1 = substitution("hello, world", "aldp?krbyjeqsgmxotwchunfiv", true);
    const expected1 = "b?qqm, nmtqp"
    expect(actual1).to.eql(expected1)
    // after
    const actual2 = substitution("b?qqm, nmtqp", "aldp?krbyjeqsgmxotwchunfiv", false);
    const expected2 = "hello, world"
    expect(actual2).to.eql(expected2);
  });

  it("should ignore capital letters. (For example, the results of A Message and a message should be the same", () => {
    const actual = substitution("Hello", "aldp?krbyjeqsgmxotwchunfiv", true);
    const expected = substitution("helLo", "aldp?krbyjeqsgmxotwchunfiv", true)
    expect(actual).to.eql(expected);
  });
});