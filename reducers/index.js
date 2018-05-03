import { combineReducers } from 'redux';

import navReducers from '../reducers/navReducers';
import loginReducers from '../modules/Login/reducers/loginReducers';
import userReducers from '../modules/User/reducers/userReducers';

export default combineReducers({
    ...navReducers,
    ...loginReducers,
    ...userReducers
});