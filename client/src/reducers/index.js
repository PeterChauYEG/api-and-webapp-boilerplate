// import redux deps
import { combineReducers } from 'redux'

// import reducers
import minions from './minions-reducer'
import user from './user-reducer'

const rootReducer = combineReducers({
  minions,
  user,
})

export default rootReducer