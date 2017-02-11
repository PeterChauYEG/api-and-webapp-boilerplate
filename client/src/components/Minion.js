import React, { Component } from 'react'

// import css
import '../CSS/Minion.css'

class Minion extends Component {

  render() {
    const {
      minion: {
        brand,
        description,
        name,
      },
    } = this.props;

    return (
      <div className="Minion">
        <h2>{name}</h2>
        <h3>{brand}</h3>
        <p>{description}</p>
      </div>
    );
  }
}

Minion.propTypes = {
  minion: React.PropTypes.object.isRequired,
}

export default Minion;
