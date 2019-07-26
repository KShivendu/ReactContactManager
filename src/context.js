import React, { Component } from "react";
import Axios from "axios";

const Context = React.createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      // console.log("Reducer Switched to Delete Contact");
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id != action.payload)
      };
    case "ADD_CONTACT":
      // console.log("Reducer Switched to Delete Contact");
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    case "UPDATE_CONTACT":
      // console.log("Reducer Switched to Delete Contact");
      return {
        ...state,
        contacts: state.contacts.map(contact =>
          contact.id === action.payload.id
            ? (contact = action.payload)
            : contact
        )
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      // {
      //   id: 1,
      //   name: "John Doe",
      //   email: "jdoe@gmail.com",
      //   phone: "XXX"
      // },
      // {
      //   id: 2,
      //   name: "John Doe2",
      //   email: "jdoe2il.com",
      //   phone: "XXX2"
      // },
      // {
      //   id: 3,
      //   name: "John Doe3",
      //   email: "jdoe3@gmail.com",
      //   phone: "XXX3"
      // }
    ],
    dispatch: action => {
      // console.log("Disptacher called");
      // console.log(reducer(this.state, action));
      this.setState(state => reducer(state, action));
    }
  };

  async componentDidMount() {
    const res = await Axios("https://jsonplaceholder.typicode.com/users");
    //   .then(response => response.json())
    //   .then(dat => {
    //     console.log(dat);
    this.setState({
      contacts: res.data
    });
    // });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
