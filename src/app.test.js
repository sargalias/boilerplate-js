import React from 'react';
import { shallow } from 'enzyme';
import App from './app';

test('test', () => {
  expect(1 + 1).toBe(2);
});

test('snapshot', () => {
  expect([1, 2]).toMatchSnapshot();
});

test('snapshot app', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});
