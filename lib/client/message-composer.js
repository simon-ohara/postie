import React, { Component } from 'react';
import ArgumentList from './argument-list';

export default class MessageComposer extends Component {
  render() {
    return (
      <form>
        <div id="message-address">
          <input/>
          <button>Send Message</button>
        </div>
        <ArgumentList/>
      </form>
    );
  }
}
