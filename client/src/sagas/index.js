// import redux-saga deps
import { fork } from 'redux-saga/effects'

// import sagas
import {
  addMinionRequest,
  getMinionsRequest,
} from './minions-sagas'

import {
  authenticationRequest,
} from './user-sagas'

export default function* rootSaga() {
  yield [
    fork(addMinionRequest),
    fork(authenticationRequest),
    fork(getMinionsRequest),
  ]
}