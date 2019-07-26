import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import axios from "axios";
import { Link } from "react-router-dom";
// import "./contact.css";
class Contact extends Component {
  // Somehow not working
  // static PropTypes = {
  //   name: PropTypes.string.isRequired,
  //   email: PropTypes.string.isRequired,
  //   phone: PropTypes.string.isRequired
  // };
  onDeleteClick = async (id, dispatch) => {
    // console.log(id, dispatch);
    console.log(`https://jsonplaceholder.typicode.com/users/${id}`);
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };
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
    const { id, name, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{" "}
                <i
                  onClick={e => {
                    this.setState({
                      showContactInfo: !this.state.showContactInfo
                    });
                    // console.log(e.target.style[0]);
                  }}
                  className="fa fa-sort-down"
                  style={{
                    cursor: "pointer",
                    transform: !this.state.showContactInfo
                      ? "rotate(-90deg)"
                      : "rotate(0deg)"
                  }}
                />
                <i
                  className="fa fa-times"
                  style={{ cursor: "pointer", color: "red", float: "right" }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                  // onClick={() => {
                  //   this.props.deleteClickHandler();
                  // }}
                />
                {"   "}
                <Link to={`contact/edit/${id}`}>
                  <i
                    className="fa fa-edit"
                    style={{
                      cursor: "pointer",
                      float: "right",
                      color: "black",
                      marginRight: "1rem"
                    }}
                  />
                </Link>
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
        }}
      </Consumer>
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
// It's not necessary for you to provide propType for each prop do only where you want to put a criteria
export default Contact;
