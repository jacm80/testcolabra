import { all, fork, takeEvery } from 'redux-saga/effects';
import { authenticate } from '../modules/Login/sagas/loginSagas';

export default function *rootSaga() {
   yield all([
       yield takeEvery('AUTHENTICATE', authenticate)
   ])
}
