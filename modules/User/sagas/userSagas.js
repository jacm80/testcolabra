import { put, take, call } from 'redux-saga/effects';

import * as types from '../constants';

// TAKE only for actions, return the response
// PUT set a action
// CALL to get async with payload

function *createUser({ payload }) {
    try {
       console.log('userSaga :: payload', payload);
    } catch (error) {

    }
}

export { 
    createUser
}