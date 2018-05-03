import * as types from '../constants';

const setFieldUser = (payload) => {
    return {
        type: types.SET_FIELD_USER,
        payload
    };
}

const createUser = (payload) => {
    return {
        type: types.CREATE_USER,
        payload
    };
}

export {
    setFieldUser,
    createUser
}