import React, { Component } from 'react'

// import components
import HoverButton from './HoverButton'
import MinionsContainer from './MinionsContainer'
import MinionForm from './MinionForm'

// import css
import '../CSS/Minions.css'

class Minions extends Component {
  renderForm(actions, user, formIsOpen) {
    return formIsOpen ?
      <MinionForm
        actions={actions}
        user={user} /> :
        null
  }

  render() {
    const {
      actions,
      minions,
      user,
    } = this.props;

    return (
      <div className="Minions pa4">
        <h2>Minions</h2>
        <MinionsContainer minions={minions.minions} />

        {
          /* render form */
          this.renderForm(actions, user, minions.formIsOpen)
        }

        <HoverButton
          action={actions.toggleMinionForm}
          backgroundColor={minions.formIsOpen ? 'bg-near-white' : 'bg-light-blue'}
          icon={minions.formIsOpen ? 'fa-close' : 'fa-plus' } />

      </div>
    );
  }
}

Minions.propTypes = {
  actions: React.PropTypes.object.isRequired,
  minions: React.PropTypes.object.isRequired,
}

export default Minions;
