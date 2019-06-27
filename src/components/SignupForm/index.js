import React, { Component } from 'react';
// third-party libraries
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import InputFieldBox from '../InputFieldBox';
import Button from '../Button';
import { SIGN_UP_STRING } from '../../utilities/myConstants';
import signupUserActions from '../../store/actions/signupUserActions';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
      firstname: '',
      lastname: '',
      othernames: '',
      phonenumber: '',
    };
  }

  onChangeHandler = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    const {
      firstname,
      lastname,
      othernames,
      phonenumber,
      email,
      username,
      password,
    } = this.state;
    const userData = {
      firstname,
      lastname,
      othernames,
      phonenumber,
      email,
      username,
      password,
    };
    const { signupUser } = this.props;
    signupUser(
      userData,
    );
  }

  render() {
    const {
      emailError,
      usernameError,
      passwordError,
      confirmPasswordError,
      signupMessageState,
      isSigningUp,
    } = this.props;

    const {
      firstname,
      lastname,
      othernames,
      email,
      phonenumber,
      password,
      username,
      confirmPassword,
    } = this.state;

    return (
      <div>
        <form className="signupForm" id="signupForm">
          <InputFieldBox
            inputFieldName="firstname"
            inputFieldValue={firstname}
            inputFieldId="signup-firstname"
            inputFieldType="text"
            inputFieldClass="signupForm__input"
            inputFieldOnchange={this.onChangeHandler}
            inputFieldPlaceholder="firstname"
          >
            <br />
            <span id="signupForm__input__error__username" className="signupForm__input__error">
              <small>{usernameError}</small>
            </span>
          </InputFieldBox>
          <InputFieldBox
            inputFieldName="lastname"
            inputFieldValue={lastname}
            inputFieldId="signup-lastname"
            inputFieldType="text"
            inputFieldClass="signupForm__input"
            inputFieldOnchange={this.onChangeHandler}
            inputFieldPlaceholder="lastname"
          >
            <br />
            <span id="signupForm__input__error__username" className="signupForm__input__error">
              <small>{usernameError}</small>
            </span>
          </InputFieldBox>
          <InputFieldBox
            inputFieldName="othernames"
            inputFieldValue={othernames}
            inputFieldId="signup-othernames"
            inputFieldType="text"
            inputFieldClass="signupForm__input"
            inputFieldOnchange={this.onChangeHandler}
            inputFieldPlaceholder="othernames"
          >
            <br />
            <span id="signupForm__input__error__username" className="signupForm__input__error">
              <small>{usernameError}</small>
            </span>
          </InputFieldBox>
          <InputFieldBox
            inputFieldName="email"
            inputFieldValue={email}
            inputFieldId="signup-email"
            inputFieldType="email"
            inputFieldClass="signupForm__input"
            inputFieldOnchange={this.onChangeHandler}
            inputFieldPlaceholder="email"
          >
            <br />
            <span id="signupForm__input__error__email" className="signupForm__input__error">
              <small>{emailError}</small>
            </span>
          </InputFieldBox>
          <InputFieldBox
            inputFieldName="phonenumber"
            inputFieldValue={phonenumber}
            inputFieldId="signup-phonenumber"
            inputFieldType="tel"
            inputFieldClass="signupForm__input"
            inputFieldOnchange={this.onChangeHandler}
            inputFieldPlaceholder="0795961853"
          >
            <br />
            <span id="signupForm__input__error__username" className="signupForm__input__error">
              <small>{usernameError}</small>
            </span>
          </InputFieldBox>
          <InputFieldBox
            inputFieldName="username"
            inputFieldValue={username}
            inputFieldId="signup-username"
            inputFieldType="text"
            inputFieldClass="signupForm__input"
            inputFieldOnchange={this.onChangeHandler}
            inputFieldPlaceholder="username"
          >
            <br />
            <span id="signupForm__input__error__username" className="signupForm__input__error">
              <small>{usernameError}</small>
            </span>
          </InputFieldBox>
          <InputFieldBox
            inputFieldName="password"
            inputFieldValue={password}
            inputFieldId="signup-password"
            inputFieldType="password"
            inputFieldClass="signupForm__input"
            inputFieldOnchange={this.onChangeHandler}
            inputFieldPlaceholder="password"
          >
            <br />
            <span id="signupForm__input__error__password" className="signupForm__input__error">
              <small>{passwordError}</small>
            </span>
          </InputFieldBox>
          <InputFieldBox
            inputFieldName="confirmPassword"
            inputFieldValue={confirmPassword}
            inputFieldId="signup-confirmPassword"
            inputFieldType="password"
            inputFieldClass="signupForm__input"
            inputFieldOnchange={this.onChangeHandler}
            inputFieldPlaceholder="confirm password"
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
            buttonId="signupForm__button"
            buttonClass="signupForm__button"
            buttonName={SIGN_UP_STRING}
            buttonEvent={this.onSubmitHandler}
          />
        </form>
      </div>
    );
  }
}

SignupForm.propTypes = {
  emailError: PropTypes.string,
  usernameError: PropTypes.string,
  passwordError: PropTypes.string,
  confirmPasswordError: PropTypes.string,
  signupMessageState: PropTypes.string,
  isSigningUp: PropTypes.bool,
  signupUser: PropTypes.func.isRequired,
};

SignupForm.defaultProps = {
  emailError: '',
  usernameError: '',
  passwordError: '',
  confirmPasswordError: '',
  signupMessageState: '',
  isSigningUp: false,
};

const mapStateToProps = (state) => {
  const {
    signupSuccess, signupError, isSigningUp,
  } = state.signupUserReducer;
  return {
    signupSuccess, signupError, isSigningUp,
  };
};

const mapDispatchToProps = dispatch => ({
  signupUser: ({
    firstname,
    lastname,
    othernames,
    phonenumber,
    email,
    username,
    password,
  }) => {
    dispatch(
      signupUserActions({
        firstname,
        lastname,
        othernames,
        phonenumber,
        email,
        username,
        password,
      }),
    );
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
