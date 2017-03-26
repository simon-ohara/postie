import React, { Component } from 'react';
import ArgumentList from './argument-list';

export default class MessageComposer extends Component {
  render() {
    return (
      <form>
        <input id="endpoint" />
        <ArgumentList/>
        <button>Send Message</button>
      </form>
    );
  }
}
