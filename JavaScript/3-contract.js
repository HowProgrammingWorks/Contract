'use strict';

const assert = require('node:assert');

const compare = (a, b) => {
  assert(typeof a === 'number');
  assert(typeof b === 'number');
  const result = a > b;
  assert(typeof result === 'boolean');
  return result;
};

{
  const result = compare(5, { a: 7 });
  console.log({ result });
}

/*{
  const result = compare(7, '5');
  console.log({ result });
}*/
