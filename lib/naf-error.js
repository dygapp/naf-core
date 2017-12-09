'use strict';

const is = require('is-type-of');
const { ErrorCode, errmsg } = require('./error-code');

class NafError extends Error {
  constructor(err, message) {
    if (is.string(err)) {
      message = err;
    }
    super(message);
    this.errcode = is.number(err) ? err : -1;
    this.errmsg = message || errmsg(err) || errmsg(ErrorCode.UNKNOW);
  }
}

class BusinessError extends NafError {
}


module.exports = {
  NafError,
  BusinessError,
  ErrorCode,
};
