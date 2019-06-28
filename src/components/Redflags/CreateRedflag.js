import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createRedflagAction } from '../../store/actions/incidentActions';
import InputFieldBox from '../InputFieldBox';
import TextFieldBox from '../TextFieldBox';
import Button from '../Button';
import { GET_LOCATION } from '../../utilities/myConstants';

class CreateRedflag extends Component {
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
    console.log('called');
  }

  getCoordinates = () => {
    console.log('get coordinates');
  }

  render() {
    const { isLoading } = this.props;
    const {
      title, description, imageUrls, videoUrls, coordinates,
    } = this.state;
    return (
      <div>
        <form className="incidentForm" id="incidentForm">
          <InputFieldBox
            inputFieldName="title"
            inputFieldValue={title}
            inputFieldId="redflag-title"
            inputFieldType="text"
            inputFieldClass="incidentForm__input"
            inputFieldOnchange={this.onChangeHandler}
            inputFieldPlaceholder="title"
          >
            <br />
            <span id="incidentForm__input__error__title" className="incidentForm__input__error">
              <small>{title}</small>
            </span>
          </InputFieldBox>
          <TextFieldBox
            textFieldName="description"
            textFieldValue={description}
            textFieldId="redflag-description"
            textFieldType="text"
            textFieldClass="incidentForm__input"
            textFieldOnchange={this.onChangeHandler}
            textFieldPlaceholder="description"
          >
            <br />
            <span id="incidentForm__input__error__description" className="incidentForm__input__error">
              <small>{description}</small>
            </span>
          </TextFieldBox>
          <InputFieldBox
            inputFieldName="imageUrls"
            inputFieldValue={imageUrls}
            inputFieldId="image-urls"
            inputFieldType="text"
            inputFieldClass="incidentForm__input"
            inputFieldOnchange={this.onChangeHandler}
            inputFieldPlaceholder="image-urls"
          >
            <br />
            <span id="incidentForm__input__error__title" className="incidentForm__input__error">
              <small>{imageUrls}</small>
            </span>
          </InputFieldBox>
          <InputFieldBox
            inputFieldName="videoUrls"
            inputFieldValue={videoUrls}
            inputFieldId="video-urls"
            inputFieldType="text"
            inputFieldClass="incidentForm__input"
            inputFieldOnchange={this.onChangeHandler}
            inputFieldPlaceholder="video-urls"
          >
            <br />
            <span id="incidentForm__input__error__title" className="incidentForm__input__error">
              <small>{videoUrls}</small>
            </span>
          </InputFieldBox>
          <div>
            <Button
              buttonId="signupForm__button"
              buttonClass="signupForm__button"
              buttonName={GET_LOCATION}
              buttonEvent={this.getCoordinates}
            />
            <InputFieldBox
              inputFieldName="coordinates"
              inputFieldValue={coordinates}
              inputFieldId="coordinates"
              inputFieldType="text"
              inputFieldClass="incidentForm__input"
              inputFieldOnchange={this.onChangeHandler}
              inputFieldPlaceholder="coordinates"
            />
          </div>
          <span className="signupForm__signUpMessage">{'signupMessageState'}</span>
          {isLoading && <div className="spinning__loader" />}
          <Button
            buttonId="signupForm__button"
            buttonClass="signupForm__button"
            buttonName={'post redflag'}
            buttonEvent={this.onSubmitHandler}
          />
        </form>
      </div>
    );
  }
}

CreateRedflag.propTypes = {
  postRedflags: PropTypes.func,
  isLoading: PropTypes.bool,
};

CreateRedflag.defaultProps = {
  postRedflags: () => {},
  isLoading: false,
};

const mapDispatchToProps = dispatch => ({
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

const mapStateToProps = (state) => {
  const { isLoading } = state.incidentReducer;
  return {
    isLoading,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateRedflag);
