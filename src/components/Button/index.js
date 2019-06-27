import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const {
    buttonClass,
    buttonId,
    buttonName,
    buttonEvent,
  } = props;
  return (
    <button
      className={buttonClass}
      id={buttonId}
      onClick={buttonEvent}
      type="button"
    >
      {buttonName}
    </button>
  );
};

Button.propTypes = {
  buttonClass: PropTypes.string,
  buttonId: PropTypes.string,
  buttonName: PropTypes.string,
  buttonEvent: PropTypes.func,
};

Button.defaultProps = {
  buttonClass: '',
  buttonId: '',
  buttonName: 'button',
  buttonEvent: () => { },
};


export default Button;
