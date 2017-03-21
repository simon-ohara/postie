import React from 'react';
import { shallow } from 'enzyme';
import MyComponent from '../../lib/client/my-component';

describe('MyComponent', function() {
  let wrapper;

  before(function() {
    wrapper = shallow(<MyComponent aProp="Awesomeness" />);
  });

  it('has aProp', function() {
    expect(wrapper.props().aProp).to.be.defined;
  });
});
