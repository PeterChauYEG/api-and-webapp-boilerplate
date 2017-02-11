import React, { Component } from 'react'

// import router
import { Redirect } from 'react-router-dom'

// import css
import '../CSS/Login.css'
// import 'font-awesome/css/font-awesome.css'

// import component
import HoverActionButton from './HoverActionButton'

class Login extends Component {
  constructor() {
    super()

    // bind functions
    this._handleNameChange = this._handleNameChange.bind(this)
    this._handlePasswordChange = this._handlePasswordChange.bind(this)

    // set initialState
    this.state = {
      credentials: {
        name: null,
        password: null,
      }
    }
  }

  // event handler for when Name changes
  // sets user.name state
  _handleNameChange(event) {

    // updates state
    this.setState({
      credentials: {
        ...this.state.credentials,
        name: event.target.value,
      }
    })

    return
  }

  // event handler for when Password changes
  // sets user.password state
  _handlePasswordChange(event) {

    // updates state
    this.setState({
      credentials: {
        ...this.state.credentials,
        password: event.target.value,
      }
    })

    return
  }

  _handleSubmit(authenticationRequest, credentials) {
    authenticationRequest(credentials)
    return
  }

  render() {
    // deconstruct props
    const {
      actions,
      location,
      user,
    } = this.props

    // deconstruct state
    const {
      credentials,
    } = this.state

    const { from } = location.state || '/'

    // const token = null
    console.log(location)
    
    return (
      <div>

        <div className="Login bg-light-blue">
          <div className="form-body">
            <h1>Login</h1>

            <div className="flex h-100 w-100 justify-between">
              <div className="flex flex-column justify-center w-100">

                {/* Name Input */}
                <div className="mv2">
                  <label
                    className="db"
                    htmlFor="name">
                    Name
                  </label>
                  <input
                    className="pa2 input-reset ba bg-transparent w-100 bw1 b--black"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="anon"
                    onChange={this._handleNameChange} />
                </div>

                {/* Password Input */}
                <div className="mv2">
                  <label
                    className="db"
                    htmlFor="password">
                    Password
                  </label>
                  <input
                    className="pa2 input-reset ba bg-transparent w-100 bw1 b--black"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="**********"
                    onChange={this._handlePasswordChange} />
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <HoverActionButton
            action={
              this._handleSubmit.bind(
                null,
                actions.authenticationRequest,
                credentials
              )
            }
            backgroundColor='bg-near-white'
            text='Submit'/>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  actions: React.PropTypes.object.isRequired,
}

export default Login;