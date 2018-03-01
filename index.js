'use strict';

const Error = require('./lib/naf-error');
const { ErrorCode } = require('./lib/error-code');
const Util = require('./lib/naf-util');

module.exports = {
  Error,
  ErrorCode,
  /**
 * @member NafCore#Util
 * @since 0.0.1
 */
  Util,
};
