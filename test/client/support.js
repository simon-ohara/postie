import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import jsdom from 'jsdom';

let document = jsdom.jsdom('<!doctype html><html><head></head><body></body></html>');
let window = document.defaultView;

global = Object.assign(global, {
  document,
  React,
  expect,
  shallow,
  sinon,
  window
});
