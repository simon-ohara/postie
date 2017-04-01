import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import CommunicationView from './communication-view';

ReactDOM.render(
  <section>
    <Header/>
    <CommunicationView />
  </section>,
  document.querySelector('main')
);
