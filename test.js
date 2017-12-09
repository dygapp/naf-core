'use strict';

const { NafError, ErrorCode } = require('./index').Error;

try {
  throw new NafError(ErrorCode.BUSINESS);
} catch (err) {
  if (err instanceof NafError) {
    console.log(`catch NafError: ${err.errcode} - ${err.errmsg}`);
  } else {
    console.error(err);
  }
}
