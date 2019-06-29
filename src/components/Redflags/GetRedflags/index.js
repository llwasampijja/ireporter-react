// react libraries
import React, { Component } from 'react';

// third-party libraries
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// components
import Button from '../../Button';
import Navbar from '../../Navbar';

// actions
import { getRedflagsAction } from '../../../store/actions/incidentActions';

// styles
import './GetRedflags.scss';

// utilities
import incidentThumbnail from '../../../assets/images/intervention.png';
import { VIEW_STRING } from '../../../utilities/myConstants';

export class GetRedflags extends Component {
  componentDidMount = () => {
    const { getRedflags } = this.props;
    getRedflags();
  }

  render() {
    const { redflagsList, myUserName } = this.props;
    const incidentsList = redflagsList.length ? (
      redflagsList.map(redflag => (
        <div className="grid-box-container" key={redflag.incident_id}>
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
      ))
    ) : (
      <div>No posts yet</div>
    );

    return (
      <div>
        <Navbar redflagsLink="Add a redflag" userName={myUserName} adminPanel="/incidents" />
        <section id="view-user-redflags" className="section-manage-content">
          <div className="section-hold-content">
            <div>{incidentsList}</div>
          </div>
        </section>
      </div>
    );
  }
}


export const mapDispatchToProps = dispatch => ({
  getRedflags: () => {
    dispatch(getRedflagsAction());
  },
});

const mapStateToProps = (state) => {
  const { isLoading, redflagsList, myUserName } = state.incidentReducer;
  // console.log(myUserName);
  return {
    isLoading, redflagsList, myUserName,
  };
};

GetRedflags.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  redflagsList: PropTypes.array,
  getRedflags: PropTypes.func,
  myUserName: PropTypes.string,
};

GetRedflags.defaultProps = {
  redflagsList: [],
  getRedflags: () => { },
  myUserName: '',
};

export default connect(mapStateToProps, mapDispatchToProps)(GetRedflags);
