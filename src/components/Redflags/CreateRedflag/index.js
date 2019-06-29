// react libraries
import React, { Component } from 'react';

// third-party libraries
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// components
import InputFieldBox from '../../InputFieldBox';
import LoaderProgress from '../../LoaderProgress';
import Navbar from '../../Navbar';
import TextFieldBox from '../../TextFieldBox';
import Button from '../../Button';

// actions
import { createRedflagAction } from '../../../store/actions/incidentActions';

// styles
import './CreateRedflag.scss';

// utility imports
import isAuthenticated from '../../../utilities';
import { ADD_INCIDENT } from '../../../utilities/myConstants';

export class CreateRedflag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      imageUrls: '',
      videoUrls: '',
      coordinates: '',
    };
  }

  onChangeHandler = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  onSubmitHandler = () => {
    const { postRedflags } = this.props;
    const {
      title, description, imageUrls, videoUrls, coordinates,
    } = this.state;

    const newrewdflag = {
      title, description, imageUrls, videoUrls, coordinates,
    };

    postRedflags(newrewdflag);
  }

  render() {
    const { isLoading, error, successMessage } = this.props;
    const {
      title, description, imageUrls, videoUrls, coordinates,
    } = this.state;

    const myUserName = isAuthenticated().username;

    return (
      <div>
        <Navbar redflagsLink="Redflags" userName={myUserName} adminPanel="/" />
        <div className="content-container">
          <form className="incidentForm" id="incidentForm">
            <InputFieldBox
              inputFieldName="title"
              inputFieldValue={title}
              inputFieldId="redflag-title"
              inputFieldType="text"
              inputFieldClass="incidentForm__input"
              inputFieldOnchange={this.onChangeHandler}
              inputFieldPlaceholder="title"
            />
            <TextFieldBox
              textFieldName="description"
              textFieldValue={description}
              textFieldId="redflag-description"
              textFieldType="text"
              textFieldClass="incidentForm__input"
              textFieldOnchange={this.onChangeHandler}
              textFieldPlaceholder="description"
            />
            <InputFieldBox
              inputFieldName="imageUrls"
              inputFieldValue={imageUrls}
              inputFieldId="image-urls"
              inputFieldType="text"
              inputFieldClass="incidentForm__input"
              inputFieldOnchange={this.onChangeHandler}
              inputFieldPlaceholder="image-urls separated by commas"
            />
            <InputFieldBox
              inputFieldName="videoUrls"
              inputFieldValue={videoUrls}
              inputFieldId="video-urls"
              inputFieldType="text"
              inputFieldClass="incidentForm__input"
              inputFieldOnchange={this.onChangeHandler}
              inputFieldPlaceholder="video-urls separated by commas"
            />
            <InputFieldBox
              inputFieldName="coordinates"
              inputFieldValue={coordinates}
              inputFieldId="coordinates"
              inputFieldType="text"
              inputFieldClass="incidentForm__input"
              inputFieldOnchange={this.onChangeHandler}
              inputFieldPlaceholder="coordinates e.g 0.38272, 31.73373"
            />
            <span className="incidentForm__error">{error}</span>
            <span className="incidentForm__Message">{successMessage}</span>
            {isLoading && <LoaderProgress />}
            <Button
              buttonId="signupForm__button"
              buttonClass="signupForm__button"
              buttonName={ADD_INCIDENT}
              buttonEvent={this.onSubmitHandler}
            />
          </form>
        </div>
      </div>
    );
  }
}

CreateRedflag.propTypes = {
  postRedflags: PropTypes.func,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  successMessage: PropTypes.string,
};

CreateRedflag.defaultProps = {
  postRedflags: () => { },
  isLoading: false,
  error: '',
  successMessage: '',
};

export const mapDispatchToProps = dispatch => ({
  postRedflags: ({
    title, description, imageUrls, videoUrls, coordinates,
  }) => {
    const myVideos = videoUrls.split(',');
    const myImages = imageUrls.split(',');
    dispatch(createRedflagAction({
      title, comment: description, images: myImages, videos: myVideos, location: coordinates,
    }));
  },
});

export const mapStateToProps = (state) => {
  const { isLoading, error, successMessage } = state.incidentReducer;
  return {
    isLoading, error, successMessage,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateRedflag);
