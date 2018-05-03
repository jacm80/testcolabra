import { put, take, call } from 'redux-saga/effects';

import { getToken } from '../../../helpers/auth';
import * as types from '../constants';

// TAKE only for actions, return the response
// PUT set a action
// CALL to get async with payload

export function* authenticate({ payload }) {
   try {
      const result = yield call(getToken, payload);
      if (result) {
         yield put({ type: types.LOGIN_FAILED, payload: { loginFailed: false } });
         yield put({ type: 'Login' });
      } else {
         yield put({ type: types.LOGIN_FAILED, payload: { loginFailed: true } });
      }
   } catch (error) {
      yield put({ type: types.LOGIN_FAILED, payload: { loginFailed: true } });
   }
}