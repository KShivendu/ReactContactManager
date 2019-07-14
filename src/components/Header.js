import React from "react";
import PropTypes from "prop-types";

function Header(props) {
  return (
    <nav className="navbar narbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {props.branding}
        </a>
      </div>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a href="" className="nav-link">
            Home
          </a>
        </li>
      </ul>
    </nav>
  );
}

Header.defaultProps = {
  branding: "Default Brand"
};

// Not working somehow !!!
// Header.PropTypes = {
//   branding: PropTypes.object.isRequired
// };

const headingStlye = {
  // color: "green",
  // fontSize: "50px"
};
export default Header;
