const assert = require('assert');
const Paint = require('../models/paint.js');

describe('Paint', function(){
  beforeEach(function(){
    paint = new Paint(10)
  });

  it("has a number of litres of paint", function(){
    assert.strictEqual(paint.amount, 10);
  });

  it("should be able to check that it is empty", function(){
    assert.strictEqual(paint.isEmpty(), false);
  });

  it("should be able to empty itself of paint" , function(){
    paint.empty(10)
    assert.strictEqual(paint.amount, 0)
  });

});
