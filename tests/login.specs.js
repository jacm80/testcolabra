import test from 'tape';

import { call, put } from 'redux-saga/effects';

import { getToken } from '../helpers/auth';
import * as types from '../modules/Login/constants';
import { authenticate } from '../modules/Login/sagas/loginSagas';

test('Authenticate Test', t => {
	const generator = authenticate({ email: 'jacanepa@gmail.com', password: '123' });

	t.deepEqual(
		generator.next().value['@@redux-saga/IO'],
		true,
		'User Exist Credentials'
	);
	
	t.deepEqual(
		generator.next().value, 
		put({ type: types.LOGIN_FAILED, payload: { loginFailed: true } }),
		'Set loginFailed to FALSE'
	);
	
	t.deepEqual(
		generator.next(), 
		{ done: true, value: undefined }, 
		'Login Saga must be done'
	);
	
	t.end()
});