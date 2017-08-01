'use strict'

var chai = require('chai');
var assert = chai.assert;

var lib = require('./lib/aritgeo.js');

describe("Test that a valid array was supplied", function() {
  it("should return Please supply a valid array for Andela ", function() {
    assert(
      lib.arithGeo("Andela"), "Please supply a valid array")
  });
  it("should return Please supply a valid array for 123 ", function() {
    assert(
      lib.arithGeo(123), "Please supply a valid array")
});

describe("Test for invalid array length", function() {
  it("should return 0 for empty array", function() {
    assert.equal(0, lib.arithGeo([]))
  });
});

describe("Arithmetic Values", function() {
  it("should return Arithmetic for 1,2,3,4", function() {
    assert.equal("Arithmetic", lib.arithGeo([1,2,3,4]))
  });
  it("should return Arithmetic for 2,3,4,5", function() {
    assert.equal("Arithmetic", lib.arithGeo([2,3,4,5]))
  });
  it("should return Arithmetic for 50,60,70,80", function() {
    assert.equal("Arithmetic", lib.arithGeo([50,60,70,80]))
  });
});

describe("Invalid Values", function() {
  it("should return -1 for 10,13,16,20", function() {
    assert.equal(-1, lib.arithGeo([10,13,16,20]))
  });
  it("should return Arithmetic for 10,3,16,20", function() {
    assert.equal(-1, lib.arithGeo([10,3,16,20]))
  });
});

describe("Test for Geometric values", function() {
  it("should return Geometric for 2, 6, 18, 54", function() {
    assert.equal("Geometric", lib.arithGeo([2, 6, 18, 54]))
  });
  it("should return Geometric for 10, 30, 90, 270", function() {
    assert.equal("Geometric", lib.arithGeo([10, 30, 90, 270]))
  });
  it("should return Geometric for 10,3,16,20", function() {
    assert.equal(-1, lib.arithGeo([2 , 8 , 32 , 128]))
  });
});