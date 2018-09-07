'use strict';

const _ = require('lodash');
const { ErrorCode, errmsg } = require('./error-code');

class NafError extends Error {
  constructor(err, message, details) {
    if (_.isString(err)) {
      message = err;
    }
    super(message);
    this.errcode = _.isNumber(err) ? err : -1;
    this.errmsg = message || errmsg(this.errcode) || errmsg(ErrorCode.UNKNOW);
    this.details = details;
  }
}

class BusinessError extends NafError {
  static getErrorMsg(errcode) {
    return errmsg(errcode);
  }
}


module.exports = {
  NafError,
  BusinessError,
  ErrorCode,
};
