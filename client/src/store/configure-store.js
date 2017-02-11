// import redux
import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from '../reducers';

// import redux-saga
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas'

// import default data
import minions from '../data/minions'
import user from '../data/user'

// import localStorage helpers
import { loadState } from './localStorage'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

//enable redux devtools via enchancers
const enhancers = compose(
  applyMiddleware(sagaMiddleware),
  window.devToolsExtension ?
    window.devToolsExtension() :
    f => f
)

const defaultState = {
  minions,
  user,
}

// persist state in client's localStorage
const persistedState = loadState()

// merge defaultState and persistedState
const preloadedState = {
  ...defaultState,
  ...persistedState,
}

// create state store
const store = createStore(
  rootReducer,
  preloadedState,
  enhancers
)

// run the rootSaga
sagaMiddleware.run(rootSaga)

export default store