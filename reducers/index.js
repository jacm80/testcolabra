import { combineReducers } from 'redux';

import navReducers from '../reducers/navReducers';
import loginReducers from '../modules/Login/reducers/loginReducers';

export default combineReducers({
    ...navReducers,
    ...loginReducers
});