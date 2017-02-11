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
        <h2>{name} - {brand}</h2>
        <p>{description}</p>
      </div>
    );
  }
}

Minion.propTypes = {
  minion: React.PropTypes.object.isRequired,
}

export default Minion;
