'use strict'

var chai = require('chai');
var assert = chai.assert;

var lib = require('./lib/library.js');

describe("Test that a valid array was supplied", function() {
  it("should return Please supply a valid array for Andela ", function() {
    assert(
      lib.arithGeo("Andela"), "Please supply a valid array")
  });
  it("should return Please supply a valid array for 123 ", function() {
    assert(
      lib.arithGeo(123), "Please supply a valid array")
  });
  it("should return Please supply a valid array for false ", function() {
    assert(
      lib.arithGeo(false), "Please supply a valid array")
  });
  it("should return Please supply a valid array for {}} ", function() {
    assert(
      lib.arithGeo({}), "Please supply a valid array")
  });
});

describe("Test for invalid array length", function() {
  it("should return 0 for empty array", function() {
    assert(
      lib.arithGeo([]), 0)
  });
});