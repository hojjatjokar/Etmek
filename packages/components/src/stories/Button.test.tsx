import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { Button } from './Button';

afterEach(cleanup);

describe('Button', () => {
  test('to render correctly', () => {
    render(<Button label="Title" />);
  });

  test('shows proper label when rendered', () => {
    const { queryByText } = render(<Button label="Title" />);
    expect(queryByText('Title')).toBeTruthy();
  });

  test('shows proper label when rendered', () => {
    const { queryByText } = render(<Button label="Title" />);
    expect(queryByText('Title')).toBeTruthy();
  });

  test('calls correct function on click', () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button onClick={onClick} label="Title" />);
    fireEvent.click(getByText('Title'));
    expect(onClick).toHaveBeenCalled();
  });
});
