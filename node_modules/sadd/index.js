var SUCC = [];
for (var k = 0; k < 10; k++) {
  SUCC.push(String(k));
}

function sadd(a, b) {
  if (a === undefined || !/^\d+$/.test(a)) {
    throw 'First argument is not a number';
  }
  if ( b === undefined || !/^\d+$/.test(b)) {
    throw 'Second argument is not a number';
  }

  var i = a.length - 1, j = b.length - 1, c = [], d = '', r, s = 0;
  while (a.charAt(i) !== '' || b.charAt(j) !== '') {
    r = (+(a.charAt(i)||'0')) + (+(b.charAt(j)||'0')) + s;
    c.unshift(SUCC[r % 10]);
    i--;
    j--;
    s = r > 9 ? 1 : 0;
  }
  // Final carryover
  if (s) {
    c.unshift('1');
  }
  return c.join('');
}

module.exports = sadd;
