import * as types from '../constants';

const INITIAL_STATE = {
	id: '',
	email: 'Margarita27@gmail.com',
	first_name: 'Juan',
	last_name: 'Tirado',
	phone: '924035013',
	username: 'Adán_Pichardo',
	password: 'aJfhgdfPQdbOuoT',
	confirm_password: 'aJfhgdfPQdbOuoT'
};

const userReducers = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case types.SET_FIELD_USER:
			return { ...state, ...action.payload };
		case types.CREATE_USER:
			return action.payload;
		case types.BLANK_USER:
			return {
				...state, ...{
					id: '',
					email: '',
					first_name: '',
					last_name: '',
					phone: '',
					username: '',
					password: '',
					confirm_password: ''
				}
			};
		default:
			return state;
	}
}

const userFetchReducers = (state = [], action) => {
	switch (action.type) {
		case types.FETCH_USER:
			return [...state, action.payload];
		default:
			return state;
	}
}

const createdUserReducers = (state = { created: false }, action) => {
	switch (action.type) {
		case types.CREATED_USER_SUCCESS:
			return { ...state, ...action.payload };
		default:
			return state;
	}
}


const errorsUserReducers = (state = {}, action) => {
	switch (action.type) {
		case types.ERROR_CREATE_USER:
			return { ...state, ...action.payload };
		default:
			return state;
	}
}

export default {
	user: userReducers,
	userFetch: userFetchReducers,
	createdUser: createdUserReducers,
	errorUser: errorsUserReducers
}