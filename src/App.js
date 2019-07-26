import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Contact from "./components/contacts/Contact";
import Header from "./components/layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Contacts from "./components/contacts/Contacts";
import AddContact from "./components/contacts/AddContact";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import about from "./components/pages/about";
import Test from "./components/test/Test";
import { Provider } from "./context";
import Error_404 from "./components/pages/Error_404";
import EditContact from "./components/contacts/EditContact";
function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <div className="container">
            <Header branding="Contact Manager" />
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/contact/add" component={AddContact} />
              <Route exact path="/about/" component={about} />
              <Route exact path="/test/" component={Test} />
              <Route exact path="/contact/edit/:id" component={EditContact} />
              <Route component={Error_404} />
              {/* Error 404 Must be at last */}
            </Switch>
            {/* <AddContact /> */}
            {/* <Contact name="John Doe" email="kshivendu1@gmail.com" phone="XXX" /> */}
            {/* <Contact name="Rondu" email="ronnd@gmail.com" phone="XXX" /> */}
            {/* <Contacts /> */}
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
