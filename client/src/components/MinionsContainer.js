import React, { Component } from 'react'

// import components
import Minion from './Minion'

class MinionsContainer extends Component {
  renderMinions(minions) {
    // handle type
    if (typeof minions === 'object') {
      return <p>error loading minions</p>
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
          minions.length === 0 ?
            <p>There's no minions yet. You should add one!</p> :
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
