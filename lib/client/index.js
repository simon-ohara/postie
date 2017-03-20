import React from 'react';
import ReactDOM from 'react-dom';
import MyComponent from './my-component';

let someProps = {
  name: "dave",
  age: 23,
  gender: "male"
};

ReactDOM.render(
  <MyComponent { ...someProps } />,
  document.querySelector('main')
);
