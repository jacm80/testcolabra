import { delay, put, take, call } from 'redux-saga/effects';
import * as types from '../constants';

import { URL_POST_CREATE_USER } from '../../../constants/globals';
import { tfetch } from '../../../helpers/tfetch';

// TAKE only for actions, return the response
// PUT set a action
// CALL to get async with payload

function* createUser({ payload }) {
	try {
		const _user = { ...payload };
		delete _user.id;
		const response = yield call(tfetch, URL_POST_CREATE_USER, { body: _user, method: 'post' });
		if (response.success) {
			yield put({ type: types.CREATED_USER_SUCCESS, payload: { created: true }});
			yield put({ type: types.CREATED_USER_SUCCESS, payload: { created: false }});
			yield put({ type: types.BLANK_USER });
		} else {
			yield put({ type: types.ERROR_CREATE_USER, payload: { error: response.error }});
		}
	} catch (error) {
		yield put({ type: types.ERROR_CREATE_USER, payload: { error: response.error } });
	}
}

export {
	createUser
}