import React, { Component } from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../Button';
import { getRedflagsAction } from '../../store/actions/incidentActions';
import './GetRedflags.scss';
import incidentThumbnail from '../../assets/images/intervention.png';
import { VIEW_STRING } from '../../utilities/myConstants';

class GetRedflags extends Component {
  componentDidMount = () => {
    const { getRedflags } = this.props;
    getRedflags();
  }

  render() {
    const { redflagsList } = this.props;
    console.log('list', redflagsList);

    const incidentsList = redflagsList.length ? (
      redflagsList.map((redflag) => {
        return (
          <div className="grid-box-container">
            <ul>
              <li>
                <div className="grid-item-thumbnail-wrapper"><img className="grid-item-thumbnail" src={incidentThumbnail} alt="thumbail" /></div>
              </li>
              <li>
                Incident Id:
                <span>
                  {redflag.incident_id}
                </span>
              </li>
              <li>
                Title:
                <span>
                  {redflag.title}
                </span>
              </li>
              <li>
                Incident Type:
                <span>
                  {redflag.incident_type}
                </span>
              </li>
              <li>
                Date:
                <span>
                  {redflag.created_on}
                </span>
              </li>
              <li>
                Status:
                <span>
                  {redflag.status}
                </span>
              </li>
              <li>
                <div className="buttons-sowa">
                  <Button
                    buttonId="but"
                    buttonClass="view-report-btn"
                    buttonName={VIEW_STRING}
                  />
                </div>
              </li>
            </ul>
          </div>
        );
      })
    ) : (
      <div>No posts yet</div>
    );

    return (
      <div>{ incidentsList }</div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  getRedflags: () => {
    dispatch(getRedflagsAction());
  },
});

const mapStateToProps = (state) => {
  const { isLoading, redflagsList } = state.incidentReducer;
  console.log('list', redflagsList);
  return {
    isLoading, redflagsList,
  };
};

GetRedflags.propTypes = {
  redflagsList: PropTypes.array,
  getRedflags: PropTypes.func,
};

GetRedflags.defaultProps = {
  redflagsList: [],
  getRedflags: () => {},
};

export default connect(mapStateToProps, mapDispatchToProps)(GetRedflags);
