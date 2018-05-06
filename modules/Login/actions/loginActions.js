import * as types from '../constants';

export function setField(payload) {
   return {
      type: types.SET_FIELD,
      payload
   };
}

export function authenticate(payload) {
   return {
      type: types.AUTHENTICATE,
      payload: payload
   }
}