
//////////////////////
/// requestAnimationFrame Clock
//////////////////////

'use strict';

(function() {

  //////////////////////
  /// Object constructor
  //////////////////////

  window.rAFClock = function(el, options) {

    this.el = this.getElement(el);
    this.options = options || {};
    this.bindMethods();
    this.start();

  };

  //////////////////////
  /// Prototype methods
  //////////////////////

  window.rAFClock.prototype = {

    //////////////////////
    /// Find the DOM node to use
    //////////////////////

    getElement: function(el) {
      if (typeof(el) == 'string') {
        return document.getElementById(el);   
      } else {
        return el;
      }
    },

    //////////////////////
    /// Bind methods to this
    //////////////////////

    bindMethods: function() {
      this.start = bind(this.start, this);
      this.tick  = bind(this.tick, this);
    },

    //////////////////////
    /// Start the rAF process
    //////////////////////

    start: function() {
      requestAnimationFrame(this.tick);
    },

    //////////////////////
    /// Update the clock
    //////////////////////

    tick: function() {
      var now     = new Date(),
          hours   = now.getHours(),
          minutes = this.formatMinutes(now.getMinutes()),
          amPm    = this.getAmPm(hours),
          nonMilitaryHours = this.getNonMilitary(hours);

      this.el.innerHTML = nonMilitaryHours + ':' + minutes + amPm;
      requestAnimationFrame(this.tick);
    },

    //////////////////////
    /// Formatting helpers
    //////////////////////

    formatMinutes: function(minutes) {
      return minutes < 10 ? '0' + minutes : minutes;
    },

    getAmPm: function(hours) {
      return hours < 12 ? 'am' : 'pm';
    },

    getNonMilitary: function(hours) {
      return hours > 12 ? hours % 12 : hours;
    }

  };

  //////////////////////
  /// Bind a function to a context
  //////////////////////

  var bind = function(fn, context) {
    return function() {
      return fn.apply(context, arguments);
    };
  };

})();
