![rAFCLock](http://i.imgur.com/iDSOUSj.png)

A very simple JavaScript clock that uses requestAnimationFrame rather than setInterval to perform the animations. Currently, the only output format looks like so:

`3:24am` or `10:33pm`

> Note that no 0 is added to the hours as padding for numbers less than 10.

## Setup

The script assumes that you are either targeting modern browsers that support requestAnimationFrame ([caniuse](http://caniuse.com/requestanimationframe)) or are making use of a polyfill such as the one from Paul Irish ([gist](https://gist.github.com/paulirish/1579671)).

From there, start the clock one of two ways:

```javascript
// Rely on the script to find your element by ID
new rAFClock('idSelector');

// Pass in the DOM node
var el = document.getElementById('myElement');
new rAFClock(el);
```