'use strict';

const assert = require('assert');

const max = (a, b) => {
  assert(typeof a === 'number');
  assert(typeof b === 'number');
  const result = a > b;
  assert(typeof result === 'boolean');
  return result;
};

{
  const result = max(7, 5);
  console.log({ result });
}

{
  const result = max(7, '5');
  console.log({ result });
}
