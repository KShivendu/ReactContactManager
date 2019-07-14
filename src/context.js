import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "jdoe@gmail.com",
        phone: "XXX"
      },
      {
        id: 2,
        name: "John Doe2",
        email: "jdoe2il.com",
        phone: "XXX2"
      },
      {
        id: 3,
        name: "John Doe3",
        email: "jdoe3@gmail.com",
        phone: "XXX3"
      }
    ]
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
