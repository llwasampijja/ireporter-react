// react libraries
import React, { Fragment } from 'react';

// third-party libraries
import PropTypes from 'prop-types';

const InputFieldBox = (props) => {
  const {
    inputFieldName,
    inputFieldValue,
    inputFieldId,
    inputFieldType,
    inputFieldClass,
    inputFieldOnchange,
    inputFieldPlaceholder,
    children,
  } = props;

  return (
    <Fragment>
      <input
        id={inputFieldId}
        name={inputFieldName}
        value={inputFieldValue}
        type={inputFieldType}
        className={inputFieldClass}
        onChange={inputFieldOnchange}
        placeholder={inputFieldPlaceholder}
      />
      {children}
    </Fragment>
  );
};

InputFieldBox.propTypes = {
  inputFieldName: PropTypes.string,
  inputFieldValue: PropTypes.string,
  inputFieldId: PropTypes.string,
  inputFieldType: PropTypes.string,
  inputFieldClass: PropTypes.string,
  inputFieldOnchange: PropTypes.func,
  inputFieldPlaceholder: PropTypes.string,
  children: PropTypes.node,
};

InputFieldBox.defaultProps = {
  inputFieldName: '',
  inputFieldValue: '',
  inputFieldId: '',
  inputFieldType: '',
  inputFieldClass: '',
  inputFieldOnchange: () => {},
  inputFieldPlaceholder: '',
  children: '',
};

export default InputFieldBox;
