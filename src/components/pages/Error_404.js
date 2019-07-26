import React, { Component } from "react";

export default class Error_404 extends Component {
  render() {
    return (
      <div>
        <h1 className="display-4">
          <span className="text-danger">404 </span>
          Page Not Found
        </h1>
        <p className="lead">Sorry that page doesn't exists</p>
      </div>
    );
  }
}
