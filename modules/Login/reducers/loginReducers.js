import * as types from '../constants';

const loginReducers = (state = { email: 'jacanepa@gmail.com', password: '123' }, action) => {
   switch (action.type) {
      case types.SET_FIELD:
         // console.log('loginReducers ::: action.payload >>> ',action.payload)
         return { ...state, ...action.payload };
      default:
         return state;
   }
}

const authenticateReducers = (state = {}, action) => {
   switch (action.type) {
      case types.AUTHENTICATE:
         return action.payload;
      default:
         return state;
   }
}

const loginFailedReducers = (state = { loginfailed: false }, action) => {
   switch (action.type) {
      case types.LOGIN_FAILED:
         return { ...state, ...action.payload };
      default:
         return state;
   }
}

export default {
   login: loginReducers,
   authenticate: authenticateReducers,
   loginFailed: loginFailedReducers
}