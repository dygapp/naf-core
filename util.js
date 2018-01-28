'use strict';

const is = require('is-type-of');

module.exports.trimData = data => {
  for (const key in data) {
    if (is.undefined(data[key])) delete data[key];
  }
  return data;
};
