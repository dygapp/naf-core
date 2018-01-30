'use strict';

const is = require('is-type-of');

module.exports.trimData = (data, exclude = [], include) => {
  if (is.nullOrUndefined(data)) {
    return data;
  }

  for (const key in data) {
    if (is.undefined(data[key]) || exclude.indexOf(key) !== -1) delete data[key];
    if (include && include.indexOf(key) === -1) delete data[key];
  }
  return data;
};
