'use strict';

const is = require('is-type-of');

class NafError extends Error {
  constructor(err, message){
    if(is.string(err)){
      message = err;
    } 
    super(message);
    this.errcode = is.number(err) ? err : -1;
    this.errmsg = message;
  }
}  
module.exports = NafError;