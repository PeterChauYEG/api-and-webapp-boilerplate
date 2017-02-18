import React from 'react'

// import css
import '../CSS/HoverActionButton.css'

const HoverActionButton = (props) => {
  const {
    action,
    backgroundColor,
    text,
  } = props

  return (
    <div className={`HoverActionButton ${backgroundColor}`}
      onClick={action} >
      <p>{text}</p>
    </div>
  );
}

HoverActionButton.propTypes = {
  action: React.PropTypes.func.isRequired,
  backgroundColor: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired,
}

export default HoverActionButton;
