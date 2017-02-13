import React from 'react'

// import css
import '../CSS/Minion.css'

const Minion = (props) => {
  const {
    minion: {
      brand,
      description,
      name,
    },
  } = props;

  return (
    <div className="Minion">
      <h2>{name}</h2>
      <h3>{brand}</h3>
      <p>{description}</p>
    </div>
  );
}

Minion.propTypes = {
  minion: React.PropTypes.object.isRequired,
}

export default Minion;
