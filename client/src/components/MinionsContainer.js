import React, { Component } from 'react'

// import components
import Minion from './Minion'

class MinionsContainer extends Component {
  renderMinions(minions) {
  
    // handle no minions
    if (minions.length === 0 ) {
      return <p>There's no minions yet. You should add one!</p>
    }
    
    // map minion data to component
    return minions.map((minion, i) => {
      return <Minion minion={minion} key={i} />
    })
  }

  render() {
    const {
      minions,
    } = this.props;

    return (
      <div>
        {
          // render minions
          this.renderMinions(minions)
        }
      </div>
    )
  }
}

MinionsContainer.propTypes = {
  minions: React.PropTypes.array.isRequired,
}

export default MinionsContainer;
