import React from 'react';
import { shallow } from 'enzyme';

test('test', () => {
  expect(1 + 1).toBe(2);
});

test('snapshot', () => {
  expect([1, 2]).toMatchSnapshot();
});
