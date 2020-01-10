'use strict';

const assert = require('assert');

const max = (a, b) => {
  assert(typeof a === 'number');
  assert(typeof b === 'number');
  const result = a + b;
  assert(typeof result === 'number');
  return result;
};

const x = max(5, 7);
console.log({ x });
