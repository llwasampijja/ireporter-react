// react libraries
import React from 'react';

// third-party libraries
import PropTypes from 'prop-types';

// styles
import './Navbar.scss';

const Navbar = (props) => {
  const {
    userName,
    redflagsLink,
    adminPanel,
  } = props;
  return (
    <header className="navigation">
      <h1><a href="index.html">IReporter</a></h1>
      <nav className="bigscreen-menu-nav" id="bigscreen-menu-nav-signedin">
        <ul>
          <li className="header-nav-item"><a href={adminPanel}>{redflagsLink}</a></li>
          <li className="header-nav-item non-admin-link"><a href="/sign-up">{userName}</a></li>
        </ul>
      </nav>
    </header>
  );
};

Navbar.propTypes = {
  userName: PropTypes.string,
  redflagsLink: PropTypes.string,
  adminPanel: PropTypes.string,
};

Navbar.defaultProps = {
  userName: '',
  redflagsLink: '',
  adminPanel: '',
};

export default Navbar;
