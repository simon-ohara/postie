import React, { Component } from 'react';

export default class MyComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dave: "derek"
    };
  }

  render() {
    console.log(this.props);
    console.log(this.state);
    return (
      <h1>Doo Wop, A, Doo Wop { this.props.name }</h1>
    );
  }
}
