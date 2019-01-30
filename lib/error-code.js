'use strict';

var _ErrorCode, _ErrorMessage;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var UNKNOW = 'UNKNOW';
var BADPARAM = 'BADPARAM';
var NETWORK = 'NETWORK';
var JSON_ERROR = 'JSON_ERROR';
var USER_NOT_EXIST = 'USER_NOT_EXIST';
var BAD_PASSWORD = 'BAD_PASSWORD';
var NOT_LOGIN = 'NOT_LOGIN';
var ACCESS_DENIED = 'ACCESS_DENIED';
var DATA_NOT_EXIST = 'DATA_NOT_EXIST';
var DATA_EXISTED = 'DATA_EXISTED';
var DATA_INVALID = 'DATA_INVALID';
var VERIFYCODE_INVALID = 'VERIFYCODE_INVALID';
var SERVICE_FAULT = 'SERVICE_FAULT';
var DATABASE_FAULT = 'DATABASE_FAULT';
var FILE_FAULT = 'FILE_FAULT';
var USER_NOT_BIND = 'USER_NOT_BIND';
var BUSINESS = 'BUSINESS';
var ErrorCode = (_ErrorCode = {}, _defineProperty(_ErrorCode, UNKNOW, -1), _defineProperty(_ErrorCode, BADPARAM, -2), _defineProperty(_ErrorCode, NETWORK, -3), _defineProperty(_ErrorCode, JSON_ERROR, -4), _defineProperty(_ErrorCode, USER_NOT_EXIST, -5), _defineProperty(_ErrorCode, BAD_PASSWORD, -6), _defineProperty(_ErrorCode, NOT_LOGIN, -7), _defineProperty(_ErrorCode, ACCESS_DENIED, -8), _defineProperty(_ErrorCode, DATA_NOT_EXIST, -9), _defineProperty(_ErrorCode, DATA_EXISTED, -10), _defineProperty(_ErrorCode, DATA_INVALID, -11), _defineProperty(_ErrorCode, VERIFYCODE_INVALID, -12), _defineProperty(_ErrorCode, SERVICE_FAULT, -13), _defineProperty(_ErrorCode, DATABASE_FAULT, -14), _defineProperty(_ErrorCode, FILE_FAULT, -15), _defineProperty(_ErrorCode, USER_NOT_BIND, -16), _defineProperty(_ErrorCode, BUSINESS, -100), _ErrorCode);
var ErrorMessage = (_ErrorMessage = {}, _defineProperty(_ErrorMessage, UNKNOW, '系统错误'), _defineProperty(_ErrorMessage, BADPARAM, '参数错误'), _defineProperty(_ErrorMessage, NETWORK, '网络错误'), _defineProperty(_ErrorMessage, JSON_ERROR, 'JSON错误'), _defineProperty(_ErrorMessage, USER_NOT_EXIST, '用户不存在'), _defineProperty(_ErrorMessage, BAD_PASSWORD, '密码错误'), _defineProperty(_ErrorMessage, NOT_LOGIN, '未登录'), _defineProperty(_ErrorMessage, ACCESS_DENIED, '禁止访问'), _defineProperty(_ErrorMessage, DATA_NOT_EXIST, '数据不存在'), _defineProperty(_ErrorMessage, DATA_EXISTED, '数据已存在'), _defineProperty(_ErrorMessage, DATA_INVALID, '无效数据'), _defineProperty(_ErrorMessage, VERIFYCODE_INVALID, '验证码无效'), _defineProperty(_ErrorMessage, SERVICE_FAULT, '服务错误'), _defineProperty(_ErrorMessage, DATABASE_FAULT, '数据库错误'), _defineProperty(_ErrorMessage, FILE_FAULT, '文件错误'), _defineProperty(_ErrorMessage, USER_NOT_BIND, '用户未绑定'), _defineProperty(_ErrorMessage, BUSINESS, '业务错误'), _ErrorMessage);

var errmsg = function errmsg(err) {
  for (var key in ErrorMessage) {
    if (ErrorCode[key] === err) {
      return ErrorMessage[key];
    }
  }
};

module.exports = {
  ErrorCode: ErrorCode,
  errmsg: errmsg
};