import React, { Component } from 'react'

// import css
import 'font-awesome/css/font-awesome.css'
import '../CSS/helpers.css'
import '../CSS/Root.css'

// import components
import Minions from './Minions'
import Header from './Header'

class Root extends Component {
  componentWillMount() {
    const {
      actions,
      minions,
      user,
    } = this.props
    
    // check if minions are loaded
    if (minions.minions.length === 0) {

        /* load minions*/
        actions.getMinionsRequest(user.token)        
      
    }

  }
  
  renderEnvironmentHeader() {
    let result = ''
    
    if (process.env.NODE_ENV !== 'production') {
      result = (
        <Header backgroundColor="bg-dark-blue">
          <p>This app is currently in <b>{process.env.NODE_ENV}</b> mode</p>
        </Header>
      )
    }
    
    return result
  }

  render() {
    const {
      actions,
      minions,
    } = this.props

    return (
      <div className="Root bg-lightest-blue pa3">
      
        {
          this.renderEnvironmentHeader()
        }
        
        <Minions
          {...this.props}
          actions={actions}
          minions={minions} />

      </div>
    );
  }
}

export default Root