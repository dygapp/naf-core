'use strict';

const is = require('is-type-of');
const util = require('core-util-is');

module.exports = {

  ...util,

  trimData(data, exclude = [], include) {
    if (is.nullOrUndefined(data)) {
      return data;
    }

    for (const key in data) {
      if (is.undefined(data[key]) || (exclude && exclude.indexOf(key) !== -1)) delete data[key];
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
};

