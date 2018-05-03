import * as types from '../constants';

const INITIAL_STATE = {
    id: '',
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    username: ''
};

const userReducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.SET_FIELD_USER:
            return { ...state, ...action.payload };
        case types.CREATE_USER:
            return action.payload;
        default:
            return state;
    }
}

const userFetchReducers = (state = [], action) => {
    switch (action.type) {
        case types.FETCH_USER:
            return [ ...state, action.payload ];
        default:
            return state;
    }
}

export default {
    user: userReducers,
    userFetch: userFetchReducers
}