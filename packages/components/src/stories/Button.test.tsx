import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Button } from './Button';

afterEach(cleanup);

describe('Button', () => {
  test('to render correctly', () => {
    render(<Button label="Title" />);
  });

  // test('render label correctly', () => {
  //   render(<Button label="Title" />);
  // });
});
