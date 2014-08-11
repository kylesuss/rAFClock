(function() {

  this.rAFClock = function(el, options) {

    this.el = this.getElement(el);
    this.options = options || {};
    this.bindMethods();
    this.start();

  }

  rAFClock.prototype = {

    getElement: function(el) {
      if (typeof(el) == 'string') {
        return document.getElementById(el);   
      } else {
        return el;
      }
    },

    bindMethods: function() {
      this.start = bind(this.start, this);
      this.tick  = bind(this.tick, this);
    },

    start: function() {
      requestAnimationFrame(this.tick);
    },

    tick: function() {
      var now     = new Date(),
          hours   = now.getHours(),
          minutes = now.getMinutes(),
          seconds = now.getSeconds(),
          amPm    = this.getAmPm(hours),
          hours   = this.getNonMilitary(hours);

      this.el.innerHTML = hours + ':' + minutes + amPm;
      requestAnimationFrame(this.tick);
    },

    getAmPm: function(hours) {
      return hours < 12 ? 'am' : 'pm';
    },

    getNonMilitary: function(hours) {
      return hours > 12 ? hours % 12 : hours;
    }

  }

  var bind = function(fn, context) {
    return function() {
      return fn.apply(context, arguments);
    };
  };

})();