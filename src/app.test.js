import React from 'react';
import { shallow } from 'enzyme';
import App from './app';

test('test', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.text()).toBe('Hello World!');
});
