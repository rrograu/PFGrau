[![Build Status](https://travis-ci.org/claudiopro/sadd.svg?branch=master)](https://travis-ci.org/claudiopro/sadd)

# sadd

Performs the addition of two numbers represented as strings, and returns the result represented as string.

Useful when either number you must sum is bigger than the maximum integer that can be exactly represented and
correctly compared. See [`Number.MAX_SAFE_INTEGER` at MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) for an explanation.

# API

`var sadd = require('sadd');`

## sadd(str1, str2)

Returns the string representation of the sum of the numbers represented by `str1` and `str2`.

```js
sadd('123', '456');
//--> '579'
```

# License

[BSD 3-Clause](http://opensource.org/licenses/BSD-3-Clause)

Copyright (c) Claudio Procida 2015
