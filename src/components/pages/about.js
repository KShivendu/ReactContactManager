import React, { Component } from "react";

export default class about extends Component {
  render() {
    return (
      <div>
        <div className="display-4">
          {/* Welcome Mr. {this.props.match.params.id || "dwq"} */}
        </div>
        <h1 className="display-4">About contact manager</h1>
        <p className="lead">Simple app to manage contacts</p>
        <p className="text-secondary">Version 1.0.0</p>
      </div>
    );
  }
}
