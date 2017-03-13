import React from 'react'

// import css
import '../CSS/Header.css'

const Header = (props) => {
  const {
    backgroundColor,
  } = props

  return (
    <div className={`Header ${backgroundColor}`}>
      {props.children}
    </div>
  );
}

Header.propTypes = {
  backgroundColor: React.PropTypes.string.isRequired,
}

export default Header;
