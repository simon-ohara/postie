import React, { Component } from 'react';

export default class MyComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dave: "derek"
    };
  }

  thisFunc() {
    return "derek";
  }

  render() {
    return (
      <h1>Doo Wop, A, Doo Wop { this.props.name }</h1>
    );
  }
}
