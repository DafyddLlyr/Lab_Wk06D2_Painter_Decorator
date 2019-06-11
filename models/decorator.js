const Decorator = function(){
  this.stock = [];
};

Decorator.prototype.addPaint = function(paint){
  this.stock.push(paint);
}

Decorator.prototype.totalPaint = function(){
  total = 0
  for (paint of this.stock){
    total += paint.amount
  }
  return total
}

Decorator.prototype.enoughPaint = function(room) {
  return (this.totalPaint() >= room.area) ? true : false;
}

Decorator.prototype.paintRoom = function(room) {
  if (this.enoughPaint(room)) {
    for (let paint of this.stock) {
      let leftToBePainted = (room.area - room.paintedArea)
      if (leftToBePainted >= paint.amount) {
        room.paintedArea += paint.amount;
        paint.amount = 0;
      } else {
        paint.amount -= leftToBePainted;
        room.paintedArea = room.area;
      }
    }
  }
}

Decorator.prototype.removeEmptyPaintCans = function() {
  let stockWithPaint = this.stock.filter(paint => paint.amount !== 0);
  this.stock = stockWithPaint;
}

module.exports = Decorator;
