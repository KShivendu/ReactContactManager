import React, { Component } from "react";
import uuid from "uuid";
import { Consumer } from "../../context";
import TextInputGroup from "../layout/TextInputGroup";
import axios from "axios";
class AddContact extends Component {
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = (dispatch, e) => {
    e.preventDefault();
    //   console.log(this.state);
    const { name, email, phone } = this.state;
    if (name == "") {
      this.setState({ errors: { name: "Name is required" } });
      return;
    }
    if (email == "") {
      this.setState({ errors: { email: "Email is required" } });
      return;
    }
    if (phone == "") {
      this.setState({ errors: { phone: "Phone is required" } });
      return;
    }

    const newContact = {
      // id //: uuid(),
      name, //: name, //this.nameInput.current.value,
      email, //: email, //this.emailInput.current.value,
      phone //: phone //this.phoneInput.current.value
    };
    console.log(newContact);
    axios
      .post("https://jsonplaceholder.typicode.com/users", newContact)
      .then(res => {
        dispatch({ type: "ADD_CONTACT", payload: newContact });
      });

    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {}
    });

    this.props.history.push("/");
    // this.nameInput.current.value = this.props.name;
    // this.emailInput.current.value = this.props.email;
    // this.phoneInput.current.value = this.props.phone;
  };

  constructor(props) {
    super(props);
    // this.nameInput = React.createRef();
    // this.emailInput = React.createRef();
    // this.phoneInput = React.createRef();
    this.state = {
      name: "",
      email: "",
      phone: "",
      errors: {}
    };
  }

  static defaultProps = {};
  render() {
    const { name, email, phone, errors } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <div className="form-group">
                    <TextInputGroup
                      label="Name"
                      name="name"
                      placeholder="Enter Name.."
                      defaultVal={name}
                      value={name}
                      onChange={this.onChange}
                      ref={this.nameInput}
                      errors={errors.name}
                    />
                    <TextInputGroup
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="xyz@example.com"
                      defaultVal={email}
                      value={email}
                      onChange={this.onChange}
                      ref={this.emailInput}
                      errors={errors.email}
                    />
                    <TextInputGroup
                      label="Phone"
                      name="phone"
                      placeholder="Enter phone.."
                      defaultVal={phone}
                      value={phone}
                      onChange={this.onChange}
                      ref={this.phoneInput}
                      errors={errors.phone}
                    />

                    <input
                      type="submit"
                      className="btn btn-dark btn-block"
                      style={{ width: "50%", margin: "1% 25%" }}
                      value="Add Contact"
                    />
                  </div>
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default AddContact;
