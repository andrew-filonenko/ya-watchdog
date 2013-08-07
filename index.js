var util = require('util'),
    EventEmitter = require('events').EventEmitter;

var Watchdog = function Watchdog(expires) {
  this.expires = expires || 2000;
  this.timeout = null;
  this.dispose();
};

Watchdog.prototype.kick = function kick() {
  if (this.timeout) clearTimeout(this.timeout);
  this.timeout = setTimeout(this.emit.bind(this, 'timeout'), this.expires);
  return this;
};

Watchdog.prototype.dispose = function dispose() {
  if (this.timeout) clearTimeout(this.timeout);
  return this;
};

util.inherits(Watchdog, EventEmitter);

module.exports = Watchdog;
