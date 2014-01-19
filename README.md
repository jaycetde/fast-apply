# fast-apply

Apply an array of arguments... faster

```javascript

var fastApply = require('fast-apply')
  , scope = {}
;

function run() {}

fastApply(run, scope, [ 'a', 'b', 'c' ]);

```

## Fast

It uses a simple switch statement to `call` the function rather than `apply` for up to 5 arguments.

While more than 5 arguments would run faster using `apply`, anything less will see a [speed increase
of up to 50%](http://jsperf.com/many-arguments-apply-vs-switch)