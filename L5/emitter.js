function Emmitter() {
  this.events = {};
}

Emmitter.prototype.on = function (type, callback) {
  this.events[type] = this.events[type] || [];
  this.events[type].push(callback);
};

Emmitter.prototype.emit = function (type) {
  if (this.events[type]) {
    this.events[type].forEach(function (callback) {
      callback();
    });
  }
}

module.exports = Emmitter;