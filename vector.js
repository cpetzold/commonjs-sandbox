var sys = require('sys'),

Vector = module.exports = function(x, y) {
  this.x = x;
  this.y = y;
  
  var param = function(v) {
    var r = {};
    if (v.constructor == Number) {
      r.x = v;
      r.y = v;
    } else if (v.constructor == Array) {
      r.x = v[0];
      r.y = v[1];
    } else {
      return v;
    }
    return r;
  }
  
  var add = function(v) {
    v = param(v);
    this.x += v.x;
    this.y += v.y;
    return this;
  };
  
  var subtract = function(v) {
    v = param(v);
    this.x -= v.x;
    this.y -= v.y;
    return this;
  };
  
  var multiply = function(v) {
    v = param(v);
    this.x *= v.x;
    this.y *= v.y;
    return this;
  };
  
  var divide = function(v) {
    v = param(v);
    this.x /= v.x;
    this.y /= v.y;
    return this;
  };

  var cross = function(v) {
    v = param(v);
    return (this.x * v.y) - (this.y * v.x);
  };

  var magnitude = function() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  };
  
  var normalize = function() {
    var mag = this.mag();
    this.x /= mag;
    this.y /= mag;
    return this;
  };
  
  var dot = function(v) {
    v = param(v);
    return (this.x * v.x) + (this.y * v.y);
  };
  
  var toString = function() {
    return "Vector("+this.x+", "+this.y+")";
  };

  return {
    x: x,
    y: y,
    
    add: add,
    sub: subtract,
    mult: multiply,
    div: divide,
    
    cross: cross,
    mag: magnitude,
    norm: normalize,
    dot: dot,
    
    toString: toString
  };
};