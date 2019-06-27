import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputFieldBox from '../InputFieldBox';
import Button from '../Button';
import { SIGN_UP_STRING } from '../../utilities/myConstants';

class SignupForm extends Component {
  // constructor(props) {
  //   super(props);
  // };

  onChangeHandler = () => {
    console.log('something changed');
  };

  onSubmitHandler = () => {
    console.log('submitted data');
  }

  render() {
    const {
      email,
      emailError,
      username,
      usernameError,
      password,
      passwordError,
      confirmPassword,
      confirmPasswordError,
      signupMessageState,
      isSigningUp,
    } = this.props;
    return (
      <div>
        <form className="signupForm" id="signupForm">
          <InputFieldBox
            name="email"
            inputType="email"
            handleChange={this.onChangeHandler}
            placeholder="email"
            inputClass="signupForm__input"
            value={email}
          >
            <br />
            <span id="signupForm__input__error__email" className="signupForm__input__error">
              <small>{emailError}</small>
            </span>
          </InputFieldBox>
          <InputFieldBox
            name="username"
            inputType="text"
            handleChange={this.onChangeHandler}
            placeholder="username"
            inputClass="signupForm__input"
            value={username}
          >
            <br />
            <span id="signupForm__input__error__username" className="signupForm__input__error">
              <small>{usernameError}</small>
            </span>
          </InputFieldBox>
          <InputFieldBox
            name="password"
            inputType="password"
            handleChange={this.onChangeHandler}
            placeholder="password"
            inputClass="signupForm__input"
            value={password}
          >
            <br />
            <span id="signupForm__input__error__password" className="signupForm__input__error">
              <small>{passwordError}</small>
            </span>
          </InputFieldBox>
          <InputFieldBox
            name="confirmPassword"
            inputType="password"
            handleChange={this.onChangeHandler}
            placeholder="confirm password"
            inputClass="signupForm__input"
            value={confirmPassword}
          >
            <br />
            <span id="signupForm__input__error__confirmPassword" className="signupForm__input__error">
              <small>{confirmPasswordError}</small>
            </span>
          </InputFieldBox>
          <br />
          <span className="signupForm__signUpMessage">{signupMessageState}</span>
          {isSigningUp && <div className="signupForm__loader" />}
          <Button
            id="signupForm__button"
            btnClass="signupForm__button"
            btnName={SIGN_UP_STRING}
            btnEvent={this.onSubmitHandler}
          />
        </form>
      </div>
    );
  }
}

SignupForm.propTypes = {
  email: PropTypes.string,
  emailError: PropTypes.string,
  username: PropTypes.string,
  usernameError: PropTypes.string,
  password: PropTypes.string,
  passwordError: PropTypes.string,
  confirmPassword: PropTypes.string,
  confirmPasswordError: PropTypes.string,
  signupMessageState: PropTypes.string,
  isSigningUp: PropTypes.bool,
};

SignupForm.defaultProps = {
  email: 'email@company.com',
  emailError: '',
  username: '',
  usernameError: '',
  password: '',
  passwordError: '',
  confirmPassword: '',
  confirmPasswordError: '',
  signupMessageState: '',
  isSigningUp: false,
};

export default SignupForm;
