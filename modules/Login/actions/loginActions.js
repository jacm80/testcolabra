import * as types from '../constants';

export function setField(payload) {
   // console.log('payload', payload);
   return {
      type: types.SET_FIELD,
      payload
   };
}

export function authenticate(payload) {
   console.log('loginAction ::: payload >>>>', payload);
   return {
      type: types.AUTHENTICATE,
      payload: payload
   }
}