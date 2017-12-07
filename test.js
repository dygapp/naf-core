'use strict';

const { NafError } = require('./index')

try{
  throw new NafError('test error!');
}catch(err){
  if(err instanceof NafError){
    console.log(`catch NafError: ${err.errcode} - ${err.errmsg}`);
  }else{
    console.error(err);
  }
}