import React, { Component } from "react";

export default class Test extends Component {
  state = {
    title: "",
    body: ""
  };
  componentDidMount() {
    console.log("componentDidMount..");

    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body
        })
      );
  }
  //   componentWillMount() {
  //     console.log("componentWillMount..");
  //   }
  //   componentDidUpdate() {
  //     console.log("componentDidMount..");
  //   }
  //   componentWillReceiveProps(nextProps, nextState) {
  //     console.log("componentWillRecieveProps..");
  //   }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1 className="display-7">{title}</h1>
        <p className="lead">{body}</p>
      </div>
    );
  }
}
