import test from 'tape';

import { call, put } from 'redux-saga/effects';

import { getToken } from '../helpers/auth';
import * as types from '../modules/Login/constants';
import { authenticate } from '../modules/Login/sagas/loginSagas';

test('Authenticate Test', t => {

	const credentialMock = { email: 'test@gmail.com', password: '321' }

	// Mock to pass the ACTIONS to SAGA
	const authenticateAction = () => {
		return {
			type: 'AUTHENTICATE',
			payload: credentialMock
		}
	};

	const loginFailed = () => {
		return {
			type: types.LOGIN_FAILED, 
			payload: { loginFailed: false } 
		}
	}

	const generator = authenticate(authenticateAction());
	
	// Flow SUCCESS to check the values in the generator
	// console.log('1) >>>>', generator.next().value.CALL.args);
	// console.log('2) >>>>', generator.next(true));
	// console.log('3) >>>>', generator.next().value.PUT.action);

	t.deepEqual(
		generator.next().value.CALL.args[0],
		credentialMock,
		'1) User Exist Credentials'
	);

	t.deepEqual(
		// mock to set the value true in the variable SAGA {result}
		generator.next(true).value, 
		put(loginFailed()),
		'2) Set loginFailed to FALSE'
	);

	t.deepEqual(
		generator.next().value,
		put({ type: 'Login' }),
		'3) Call login success navRouter'
	);

	t.deepEqual(
		generator.next().done, 
		true, 
		'4) Login Saga must be done'
	);

	t.end();

});