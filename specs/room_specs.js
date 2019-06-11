const assert = require('assert');
const Room = require('../models/room.js');

describe('Room', function(){
  beforeEach(function(){
    room = new Room(10)
  });

  it('should have an area in square meters', function(){
    const actual = room.area;
    assert.strictEqual(actual, 10);
  });

  it('should start not painted', function(){
    assert.strictEqual(room.paintedArea, 0);
  });

  it("should be able to be painted", function(){
    room.paint(10)
    assert.strictEqual(room.paintedArea, 10);
  });

});
