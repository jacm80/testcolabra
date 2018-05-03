import { all, fork, takeEvery } from 'redux-saga/effects';

import { authenticate } from '../modules/Login/sagas/loginSagas';
import { createUser } from '../modules/User/sagas/userSagas';

export default function *rootSaga() {
   yield all([
       yield takeEvery('AUTHENTICATE', authenticate),
       yield takeEvery('CREATE_USER', createUser)
   ]);
}
