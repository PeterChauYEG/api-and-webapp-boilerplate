// import redux-saga deps
import { takeEvery } from 'redux-saga'
import { call, put, } from 'redux-saga/effects'

// import api
import Client from '../Client'

// worker Saga: will be fired on ADD_MINION_REQUEST actions
function* addMinion(action) {
  try {
    const {
      minion,
      token,
    } = action

    // make api call to create a new minion
    const newMinion = yield call(Client.addMinion, minion, token, (error, result) => {
      if (error) {
        return error
      }

      return result.message
    })

    // update ui with newly added minion
    yield put({ type: "ADD_MINION", minion: newMinion })

  } catch (e) {
    console.log(e)
  }
}

// worker Saga: will be fired on GET_MINIONS_REQUEST actions
function* getMinions(action) {
  try {

    const { token } = action

    // make api call to get minions
    const minions = yield call(Client.getMinions, token, (error, result) => {
      if (error) {
        return error
      }

      return result.message
    })

    // update ui with minions
    yield put({ type: "SET_MINIONS", minions })

  } catch (e) {
    console.log(e)
  }
}


/*
  Starts addMinion on each dispatched 'ADD_MINION_REQUEST' action.
  Allows concurrent adds of minions
*/
export function* addMinionRequest(action) {
  yield takeEvery('ADD_MINION_REQUEST', addMinion);
}

/*
  Starts getMinions on each dispatched 'GET_MINIONS_REQUEST' action.
  Pulls minions from api and sets minion.minions state
*/
export function* getMinionsRequest(action) {
  yield takeEvery('GET_MINIONS_REQUEST', getMinions);
}