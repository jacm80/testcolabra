import test from 'tape';
import faker from 'faker';
import { put, take, call } from 'redux-saga/effects';

import { URL_POST_CREATE_USER } from '../constants/globals'
import * as types from '../modules/User/constants';

import { authenticate } from '../modules/Login/sagas/loginSagas';
import { createUser } from '../modules/User/sagas/userSagas';
import { getUser } from '../helpers/auth';

faker.locale = 'es';

const userFake = {
    email: faker.internet.email(),
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
    username: faker.internet.userName(),
    password: faker.internet.password()
};

const createUserAction = (payload) => {
    return {
        type: types.CREATE_USER,
        payload
    };
}

const createdUserSuccess = (payload) => {
    return {
        type: types.CREATED_USER_SUCCESS,
        payload
    };
} 

const blankUser = () => { 
    return { 
        type: types.BLANK_USER 
    };
};


test('Create User Flow Success', t => {

    const genCreator = createUser(createUserAction(userFake));

    t.deepEqual(
        genCreator.next().value.CALL.args,
        [URL_POST_CREATE_USER, { body: userFake, method: 'post' }],
        'Pass payload to create user'
    );

    t.deepEqual(
        genCreator.next({ success: true }).value,
        put(createdUserSuccess({ created: true })),
        'Show message success'
    );

    t.deepEqual(
        genCreator.next().value,
        put(createdUserSuccess({ created: false })),
        'Set created user to false'
    );

    t.deepEqual(
        genCreator.next().value,
        put(blankUser()),
        'Set user form blank'
    );

    t.deepEqual(
        genCreator.next().done,
        true,
        'End saga'
    );

    t.end();
});