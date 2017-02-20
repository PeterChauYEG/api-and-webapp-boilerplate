// import redux-saga deps
import { takeEvery } from 'redux-saga'
import { call, put, } from 'redux-saga/effects'

// import action types
import * as types from '../actions/action-types';

// import api
import Client from '../Client'

// worker Saga: will be fired on 'AUTHENTICATION_REQUEST' actions
function* getToken(action) {
  try {
    const { credentials } = action

    // make api call to get results
    const token = yield call(Client.authenticate, credentials, (result) => {

      if (!result.success) {
        return null
      }

      return result.token
    })

    // update state with results
    yield put(types.setToken(token))

  } catch (e) {
    console.log(e)
  }
}

/*
  Starts getToken on each dispatched 'AUTHENTICATION_REQUEST' action.
  Sends user credentials to api and gets a token back
  sets users state
*/
export function* authenticationRequest(credentials) {
  yield takeEvery('AUTHENTICATION_REQUEST', getToken);
}
