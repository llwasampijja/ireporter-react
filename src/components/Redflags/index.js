import React, { Component } from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getRedflagsAction } from '../../store/actions/incidentActions';

class GetRedflags extends Component {
  render() {
    const { getRedflags } = this.props;
    return (
      <div>{ getRedflags() }</div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getRedflags: () => {
    dispatch(getRedflagsAction());
  },
});

const mapStateToProps = (state) => {
  const { isLoading } = state.incidentReducer;
  return {
    isLoading,
  };
};

GetRedflags.propTypes = {
  getRedflags: PropTypes.func,
};

GetRedflags.defaultProps = {
  getRedflags: () => {},
};

export default connect(mapStateToProps, mapDispatchToProps)(GetRedflags);
