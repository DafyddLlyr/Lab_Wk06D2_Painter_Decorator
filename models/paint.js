const Paint = function(amount){
  this.amount = amount;
};

Paint.prototype.isEmpty = function(){
  return (this.amount === 0) ? true : false;
}

Paint.prototype.empty = function(amount){
  this.amount -= amount;
}

module.exports = Paint;
