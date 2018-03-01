
export class Util {
  static trimData(data: Object, exclude: Array = [], include: Array): any;

  static isEmail(val: string): boolean;

  static isMobile(val: string): boolean;

  // from core-util-is
  static isArray(arg);  
  static isBoolean(arg);  
  static isNull(arg);  
  static isNullOrUndefined(arg);  
  static isNumber(arg);  
  static isString(arg);  
  static isSymbol(arg);  
  static isUndefined(arg);  
  static isRegExp(re);  
  static isObject(arg);  
  static isDate(d);  
  static isError(e);  
  static isstatic(arg);  
  static isPrimitive(arg);
  
}

export as namespace NafCore;
