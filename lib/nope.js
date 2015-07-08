'use strict';

nope = (!!process &&
  process.toString === '[object process]') ? 
  'node' : 'nope';

module.exports = nope;
