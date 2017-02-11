import React, { Component } from 'react'

// import css
import 'font-awesome/css/font-awesome.css'
import '../CSS/helpers.css'
import '../CSS/Root.css'

// import components
import Minions from './Minions'

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

  render() {
    const {
      actions,
      minions,
    } = this.props

    return (
      <div className="Root bg-lightest-blue pa3 helvetica">
        {console.log(this.props)}

      <Minions
        {...this.props}
        actions={actions}
        minions={minions} />

      </div>
    );
  }
}

export default Root