import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";
class Contacts extends Component {
  constructor() {
    super();
    this.state = {
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
  }
  // deleteContact = id => {
  //   console.log(id);
  //   const { contacts } = this.state;

  //   const newContacts = contacts.filter(contact => contact.id != id);
  //   this.setState({ contacts: newContacts });
  // };
  render() {
    // const { contacts } = this.state;

    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <h1 className="display-4 mb-2">
                <span className="text-danger">Contact</span> List
              </h1>
              {/* You can't use className with React Fragment */}
              {contacts.map(contact => (
                <Contact
                  key={contact.id}
                  contact={contact}
                  // deleteClickHandler={this.deleteContact.bind(this, contact.id)}
                  // key={contact.id}
                  // name={contact.name}
                  // phone={contact.phone + 1}
                  // email={contact.email}
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

//  Wont'  work
// return (
//   <div>
//   {contacts.map(contact => {
//     <Contact key={contact.id} />
//   })}
// </div>
// );

//  Does  work
// return (
//   <div>
//   {contacts.map(contact => (
//     <Contact key={contact.id} />
//   ))}
// </div>
// );
export default Contacts;
