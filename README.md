#rAF Clock

A very simple JavaScript clock that uses requestAnimationFrame rather than setInterval to perform the animations. Currently, the only output format looks like so:

`HH:MM[am/pm]` -> `3:24am`

## Setup

The script assumes that you are either targeting modern browsers that support requestAnimationFrame [\(caniuse\)](http://caniuse.com/requestanimationframe) or are making use of a polyfill such as the one from Paul Irish [\(gist\)](https://gist.github.com/paulirish/1579671). 

From there, start the clock:

```javascript
// First method
new rAFClock('idSelector');
// Second method
var el = document.getElementById('myElement');
new rAFClock(el);
```

Make sure to use an ID rather than a class when you create a new rAFClock object.