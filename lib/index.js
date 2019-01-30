'use strict';

var Error = require('./naf-error');

var _require = require('./error-code'),
    ErrorCode = _require.ErrorCode;

var Util = require('./naf-util');

module.exports = {
  Error: Error,
  ErrorCode: ErrorCode,

  /**
  * @member NafCore#Util
  * @since 0.0.1
  */
  Util: Util
};