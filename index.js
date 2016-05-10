var util = require('util'),
    EventEmitter = require('events').EventEmitter;

var Watchdog = function(expires) {
  this.expires = expires || 2000;
  this._timeout = null;
};

util.inherits(Watchdog, EventEmitter);

Watchdog.prototype.kick = function() {
  if (this._timeout) clearTimeout(this._timeout);
  this._timeout = setTimeout(this.emit.bind(this, 'timeout'), this.expires);
  return this;
};

Watchdog.prototype.dispose = function() {
  if (this._timeout) clearTimeout(this._timeout);
  return this;
};

module.exports = Watchdog;
