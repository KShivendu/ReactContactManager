import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Contact from "./components/Contact";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Contacts from "./components/Contacts";

import { Provider } from "./context";
function App() {
  return (
    <Provider>
      <div className="App">
        <div className="container">
          <Header branding="Contact Manager" />
          {/* <Contact name="John Doe" email="kshivendu1@gmail.com" phone="XXX" /> */}
          {/* <Contact name="Rondu" email="ronnd@gmail.com" phone="XXX" /> */}
          <Contacts />
        </div>
      </div>
    </Provider>
  );
}

export default App;
