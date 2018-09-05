'use strict';
const _ = require('lodash');

module.exports = {

  trimData(data, exclude = [], include) {
    if (data === null || data === undefined) {
      return data;
    }

    for (const key in data) {
      if (_.isUndefined(data[key]) || (exclude && exclude.indexOf(key) !== -1)) delete data[key];
      if (include && include.indexOf(key) === -1) delete data[key];
    }
    return data;
  },

  // 检查email格式
  isEmail(val) {
    // 允许汉字、英文字母、数字
    return /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(val);
  },

  // 检查手机号格式
  isMobile(val) {
    return /^1[3-9]\d{9}$/.test(val);
  },

  // 是否为空
  isNullOrUndefined(val) {
    return val === null || val === undefined;
  },

  // 转换为boolean
  toBoolean(val) {
    if (_.isString(val) && (val.toLowerCase() === 'true' || val.toLowerCase() !== '0')) {
      val = true;
    } else if (_.isNumber(val) && val !== 0) {
      val = true;
    } else {
      val = _.isBoolean(val) && val;
    }
    return val;
  },
};

