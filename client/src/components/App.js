import React, { Component } from 'react'

// import router
import { BrowserRouter, Route, Redirect } from 'react-router-dom'

// import component
import Root from './Root'
import Login from './Login'

class App extends Component {
  render() {
    const {
      user,
    } = this.props

    return (
      <BrowserRouter>
        <div>
        
          <Route
            pattern="/"
            exactly
            component={(props) => (
              user.token != null ? (
                <Root {...props} {...this.props} />
              ) : (
                <Redirect to={{
                  pathname: '/login',
                  state: { from: props.location }
                }}/>
              )
            )} />

          <Route
            pattern="/login"
            component={(props) => (
              <Login {...props} {...this.props} />
            )} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
