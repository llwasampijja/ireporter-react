import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const TextFieldBox = (props) => {
  const {
    textFieldName,
    textFieldValue,
    textFieldId,
    textFieldType,
    textFieldClass,
    textFieldOnchange,
    textFieldPlaceholder,
    children,
  } = props;

  return (
    <Fragment>
      <input
        id={textFieldId}
        name={textFieldName}
        value={textFieldValue}
        type={textFieldType}
        className={textFieldClass}
        onChange={textFieldOnchange}
        placeholder={textFieldPlaceholder}
      />
      {children}
    </Fragment>
  );
};

TextFieldBox.propTypes = {
  textFieldName: PropTypes.string,
  textFieldValue: PropTypes.string,
  textFieldId: PropTypes.string,
  textFieldType: PropTypes.string,
  textFieldClass: PropTypes.string,
  textFieldOnchange: PropTypes.func,
  textFieldPlaceholder: PropTypes.string,
  children: PropTypes.node,
};

TextFieldBox.defaultProps = {
  textFieldName: '',
  textFieldValue: '',
  textFieldId: '',
  textFieldType: '',
  textFieldClass: '',
  textFieldOnchange: () => {},
  textFieldPlaceholder: '',
  children: '',
};

export default TextFieldBox;
