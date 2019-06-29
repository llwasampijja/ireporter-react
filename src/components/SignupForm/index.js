// react libraries
import React, { Component } from 'react';

// third-party libraries
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// components
import InputFieldBox from '../InputFieldBox';
import Button from '../Button';
import LoaderProgress from '../LoaderProgress';
import Navbar from '../Navbar';

// actions
import signupUserActions from '../../store/actions/signupUserActions';

// styles
import './SignupForm.scss';

// utilities
import { SIGN_UP_STRING } from '../../utilities/myConstants';

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
      signupStateMessage,
      signupErrorMessage,
      isLoading,
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
        <Navbar redflagsLink="Home" userName="Sign in" />
        <section className="sign-form-container">
          <div className="sign-form-container-elements-wrapper">
            <div className="sign-form-image-wrapper">
              <form className="sign-form" id="signupForm">
                <div className="sign-form-element sign-form-input-wrapper">
                  <InputFieldBox
                    inputFieldName="firstname"
                    inputFieldValue={firstname}
                    inputFieldId="signup-firstname"
                    inputFieldType="text"
                    inputFieldClass="sign-form-input"
                    inputFieldOnchange={this.onChangeHandler}
                    inputFieldPlaceholder="firstname"
                  />
                </div>
                <div className="sign-form-element sign-form-input-wrapper">
                  <InputFieldBox
                    inputFieldName="lastname"
                    inputFieldValue={lastname}
                    inputFieldId="signup-lastname"
                    inputFieldType="text"
                    inputFieldClass="sign-form-input"
                    inputFieldOnchange={this.onChangeHandler}
                    inputFieldPlaceholder="lastname"
                  />
                </div>
                <div className="sign-form-element sign-form-input-wrapper">
                  <InputFieldBox
                    inputFieldName="othernames"
                    inputFieldValue={othernames}
                    inputFieldId="signup-othernames"
                    inputFieldType="text"
                    inputFieldClass="sign-form-input"
                    inputFieldOnchange={this.onChangeHandler}
                    inputFieldPlaceholder="othernames"
                  />
                </div>
                <div className="sign-form-element sign-form-input-wrapper">
                  <InputFieldBox
                    inputFieldName="email"
                    inputFieldValue={email}
                    inputFieldId="signup-email"
                    inputFieldType="email"
                    inputFieldClass="sign-form-input"
                    inputFieldOnchange={this.onChangeHandler}
                    inputFieldPlaceholder="email"
                  />
                </div>
                <div className="sign-form-element sign-form-input-wrapper">
                  <InputFieldBox
                    inputFieldName="phonenumber"
                    inputFieldValue={phonenumber}
                    inputFieldId="signup-phonenumber"
                    inputFieldType="tel"
                    inputFieldClass="sign-form-input"
                    inputFieldOnchange={this.onChangeHandler}
                    inputFieldPlaceholder="0795961853"
                  />
                </div>
                <div className="sign-form-element sign-form-input-wrapper">
                  <InputFieldBox
                    inputFieldName="username"
                    inputFieldValue={username}
                    inputFieldId="signup-username"
                    inputFieldType="text"
                    inputFieldClass="sign-form-input"
                    inputFieldOnchange={this.onChangeHandler}
                    inputFieldPlaceholder="username"
                  />
                </div>
                <div className="sign-form-element sign-form-input-wrapper">
                  <InputFieldBox
                    inputFieldName="password"
                    inputFieldValue={password}
                    inputFieldId="signup-password"
                    inputFieldType="password"
                    inputFieldClass="sign-form-input"
                    inputFieldOnchange={this.onChangeHandler}
                    inputFieldPlaceholder="password"
                  />
                </div>
                <div className="sign-form-element sign-form-input-wrapper">
                  <InputFieldBox
                    inputFieldName="confirmPassword"
                    inputFieldValue={confirmPassword}
                    inputFieldId="signup-confirmPassword"
                    inputFieldType="password"
                    inputFieldClass="sign-form-input"
                    inputFieldOnchange={this.onChangeHandler}
                    inputFieldPlaceholder="confirm password"
                  />
                </div>
                <br />
                <span className="signupForm__signUpError">{signupErrorMessage}</span>
                <span className="signupForm__signUpMessage">{signupStateMessage}</span>
                {isLoading && <LoaderProgress />}
                <Button
                  buttonId="signupForm__button"
                  buttonClass="sign-form-input-btn"
                  buttonName={SIGN_UP_STRING}
                  buttonEvent={this.onSubmitHandler}
                />
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

SignupForm.propTypes = {
  signupStateMessage: PropTypes.string,
  signupErrorMessage: PropTypes.string,
  isLoading: PropTypes.bool,
  signupUser: PropTypes.func.isRequired,
};

SignupForm.defaultProps = {
  signupStateMessage: '',
  signupErrorMessage: '',
  isLoading: false,
};

const mapStateToProps = (state) => {
  const {
    signupStateMessage, signupErrorMessage, isLoading,
  } = state.signupUserReducer;
  return {
    signupStateMessage, signupErrorMessage, isLoading,
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
