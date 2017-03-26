import React, { Component } from 'react';
import MessageComposer from './message-composer';
import MessageViewer from './message-viewer';

export default class CommunicationView extends Component {
  render() {
    return (
      <div>
        <MessageComposer/>
        <MessageViewer/>
      </div>
    );
  }
}
