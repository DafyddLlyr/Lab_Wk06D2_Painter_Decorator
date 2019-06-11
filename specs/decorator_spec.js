const assert = require('assert');
const Decorator = require('../models/decorator.js');
const Paint = require('../models/paint.js');
const Room = require('../models/room.js');

describe('Decorator', function(){
  beforeEach(function(){
    decorator = new Decorator;
    paint1 = new Paint(10);
    paint2 = new Paint(20);
    paint3 = new Paint(5);
    room = new Room(20);
  });

  it("starts with an empty paint stock", function(){
    const actual = decorator.stock;
    assert.deepStrictEqual(actual, []);
  });

  it("should be able to add a can of paint to paint stock", function(){
    decorator.addPaint(paint1);
    const actual = decorator.stock;
    assert.deepStrictEqual(actual, [paint1]);
  });

  it("should be able to calculate total litres of paint it has in stock", function(){
    decorator.addPaint(paint1);
    decorator.addPaint(paint2);
    decorator.addPaint(paint3);
    const actual = decorator.totalPaint();
    assert.strictEqual(actual, 35);
  });

  it("should be able to calculate if it has enough to paint a room", function(){
    decorator.addPaint(paint1);
    decorator.addPaint(paint2);
    decorator.addPaint(paint3);
    const actual = decorator.enoughPaint(room);
    assert.equal(actual, true);
  });

  it("should be able to paint room if has enough paint in stock", function() {
    decorator.addPaint(paint1);
    decorator.addPaint(paint2);
    decorator.addPaint(paint3);
    decorator.paintRoom(room);
    assert.strictEqual(room.paintedArea, 20);
    assert.strictEqual(decorator.totalPaint(), 15);
  })

  it("should be able to remove empty paint cans from stock", function() {
    decorator.addPaint(paint1);
    decorator.addPaint(paint2);
    decorator.addPaint(paint3);
    decorator.paintRoom(room);
    decorator.removeEmptyPaintCans();
    assert.strictEqual(decorator.stock.length, 2);
  })

});
