import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// import css
import 'tachyons/css/tachyons.css';
import './CSS/index.css'

// import store
import store from './store/configure-store';

// import state management
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from './actions/';

// import components
import App from './components/App';

// import localStorage helpers
import { saveState } from './store/localStorage'

// import function helpers
import throttle from 'lodash/throttle'

const ReduxBound = connect(mapStateToProps, mapDispatchToProps)(App);

// subscribe to the store
// using the throttle function to limit subscribes to
// 1000ms === 1second
store.subscribe(throttle(() => {
  const {
    minions,
    user,
  } = store.getState()

  // save current state of the state to localStorage
  saveState({
    minions,
    user,
  })

}, 1000))

ReactDOM.render(
  <Provider store={store}>
    <ReduxBound />
  </Provider>,
  document.getElementById('root')
);

function mapStateToProps(state, props) {
  return {
    minions: state.minions,
    user: state.user,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  }
}