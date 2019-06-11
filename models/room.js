const Room = function(area){
  this.area = area;
  this.paintedArea = 0;
};

Room.prototype.paint = function(litres){
  this.paintedArea += litres;
}

module.exports = Room;
