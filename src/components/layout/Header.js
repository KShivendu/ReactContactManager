import React from "react";
import PropTypes from "prop-types";
import Push from "push.js";
import { Link } from "react-router-dom";

var x = 15;
// static state = { x: 15 };
function notifyMe() {
  // Let's check if the browser supports notifications
  if (!("Notification" in window)) {
    x = "This browser does not support system notifications";
    console.log(x);
    // This is not how you would really do things if they aren't supported. :)
  }

  // Let's check whether notification permissions have already been granted
  else if (Notification.permission === "granted") {
    // If it's okay let's create a notification
    var notification = new Notification("Hi there!");
    x = "Notification Sent";
    console.log(x);
  }

  // Otherwise, we need to ask the user for permission
  else if (Notification.permission !== "denied") {
    Notification.requestPermission(function(permission) {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        var notification = new Notification("Hi there!");
        x = "Granted";
        console.log(x);
      }
    });
  }

  // Finally, if the user has denied notifications and you
  // want to be respectful there is no need to bother them any more.
}

function Header(props) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {props.branding}
        </a>
      </div>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          {/* <a href="" className="nav-link">
            Home
          </a> */}
          <Link to="/" className="nav-link">
            <i className="fa fa-home" /> Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact/add" className="nav-link">
            <i className="fa fa-plus" /> Add
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact/edit" className="nav-link">
            <i className="fa fa-edit" /> Edit Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about/" className="nav-link">
            <i className="fa fa-question" />
            About
          </Link>
        </li>

        <li className="nav-item">
          {/* <button className="nav-link btn" onClick={notifyMe}>
            Notify Me
          </button> */}
          {/* <p style={{ color: "black" }}>{x}</p>
          {console.log(x)}
          <button
            className="nav-link-btn"
            onClick={() => {
              Notification.requestPermission();
              console.log(Notification.permission);
              // Push.create("Hello World");
              Push.create("Hello world!", {
                body: "How's it hangin'?",
                icon: "/icon.png",
                timeout: 4000,
                onClick: function() {
                  window.focus();
                  this.close();
                }
              });
              // new Notification("Yo");
            }}
          >
            Ask for permission
          </button> */}
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
