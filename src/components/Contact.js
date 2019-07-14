import React, { Component } from "react";
import PropTypes from "prop-types";
import { tsConstructSignatureDeclaration } from "@babel/types";
// import "./contact.css";
class Contact extends Component {
  // Somehow not working
  // static PropTypes = {
  //   name: PropTypes.string.isRequired,
  //   email: PropTypes.string.isRequired,
  //   phone: PropTypes.string.isRequired
  // };

  state = {
    showContactInfo: false
  };
  // onShowClick = (name, e) => {
  //   // console.log(e.target);
  //   // console.log(this);
  //   // 'this' parameter is passed by default
  //   // console.log(name);
  //   // State is immutable you can't directly change it
  //   this.setState({ showContactInfo: !this.state.showContactInfo });
  //   console.log(this.state);
  //   // It's weird but the previous output is true for the first time
  // };

  render() {
    const { name, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <div className="card card-body mb-3">
        <h4>
          {name}
          <i
            onClick={() => {
              this.setState({ showContactInfo: !this.state.showContactInfo });
            }}
            className="fa fa-sort-down"
            style={{ cursor: "pointer" }}
          />
          <i
            className="fa fa-times"
            style={{ cursor: "pointer", color: "red", float: "right" }}
            onClick={() => {
              this.props.deleteClickHandler();
            }}
          />

          {/* .bind(this,....) this is necessary */}
          {/* You can do this also I discovered this (not shown in tutorial)
          <i onClick={() => this.onShowClick()} className="fa fa-sort-down" /> and then use use 
          onShowClick() {
           console.log(this.state);
            }
            above render 
            */}
          {/* To put extra space use {" "} */}
        </h4>
        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">
              Email: {this.props.contact.email}
            </li>
            <li className="list-group-item">Number: {phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

// Somehow not working
// Contact.propTypes = {
//   name: propTypes.string.isRequired,
//   email: propTypes.string.isRequired,
//   phone: propTypes.string.isRequired
// };

//  Note that first one is propTypes and second is PropTypes
Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
