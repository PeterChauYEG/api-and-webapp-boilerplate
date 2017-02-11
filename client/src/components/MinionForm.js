import React, { Component } from 'react'

// import css
import '../CSS/MinionForm.css'
// import 'font-awesome/css/font-awesome.css'

// import component
import HoverActionButton from './HoverActionButton'

class MinionForm extends Component {
  constructor() {
    super()

    // bind functions
    this._handleBrandChange = this._handleBrandChange.bind(this)
    this._handleDescriptionChange = this._handleDescriptionChange.bind(this)
    this._handleNameChange = this._handleNameChange.bind(this)

    // set initialState
    this.state = {
      newMinion: {
        brand: null,
        description: null,
        name: null,
      },
    }
  }

  // event handler for when brand changes
  // sets newMinion.brand state
  _handleBrandChange(event) {

    // updates state
    this.setState({
      newMinion: {
        ...this.state.newMinion,
        brand: event.target.value,
      }
    })

    return
  }

  // event handler for when description changes
  // sets newMinion.description state
  _handleDescriptionChange(event) {

    // updates state
    this.setState({
      newMinion: {
        ...this.state.newMinion,
        description: event.target.value,
      }
    })

    return
  }

  // event handler for when Name changes
  // sets newMinion.name state
  _handleNameChange(event) {

    // updates state
    this.setState({
      newMinion: {
        ...this.state.newMinion,
        name: event.target.value,
      }
    })

    return
  }


  _handleSubmit(addMinionRequest, minion, token, toggleMinionForm) {
    addMinionRequest(minion, token)
    toggleMinionForm()

    return
  }

  render() {

    const {
      actions,
      user,
    } = this.props

    // deconstruct state
    const {
      newMinion,
    } = this.state

    return (
      <div className="MinionForm bg-light-blue">
        <div className="form-body">
          <h1>Add a new minion</h1>

          <div className="flex h-100 w-100 justify-between">

            <div className="flex flex-column justify-around w-100">

              {/* Name Input */}
              <div className="mv2">
                <label
                  className="db"
                  htmlFor="name">
                  Name
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent w-100 bw1 b--near-black"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Bob"
                  onChange={this._handleNameChange} />
              </div>

              {/* Brand Input */}
              <div className="mv2">
                <label
                  className="db"
                  htmlFor="brand">
                  Brand
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent w-100 bw1 b--near-black"
                  type="text"
                  name="brand"
                  id="brand"
                  placeholder="Business"
                  onChange={this._handleBrandChange} />
              </div>

              {/* Description Input */}
              <div className="mv2">
                <label
                  className="db"
                  htmlFor="description">
                  Description
                </label>
                <textArea
                  className="pa2 input-reset ba bg-transparent w-100 bw1 b--near-black"
                  type="text"
                  name="description"
                  id="description"
                  rows={5}
                  placeholder="looks like a bob to me"
                  onChange={this._handleDescriptionChange} />
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <HoverActionButton
          action={
            this._handleSubmit.bind(
              null,
              actions.addMinionRequest,
              newMinion,
              user.token,
              actions.toggleMinionForm
            )
          }
          backgroundColor='bg-near-white'
          text='Submit'/>
      </div>
    );
  }
}

MinionForm.propTypes = {
  actions: React.PropTypes.object.isRequired,
}

export default MinionForm;
