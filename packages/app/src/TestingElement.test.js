import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TestingElement from './TestingElement';

afterEach(cleanup);

it('should equal to 0', () => {
  const { getByTestId } = render(<TestingElement />);
  expect(getByTestId('counter')).toHaveTextContent('0');
});
