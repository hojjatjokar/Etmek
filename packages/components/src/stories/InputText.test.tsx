import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import InputText from './InputText';

afterEach(cleanup);

describe('InputText', () => {
  test('to render correctly', () => {
    render(<InputText label="Title" value="1" onChange={jest.fn} />);
  });

  test('shows proper label when rendered', () => {
    let value = '';

    const { queryByText } = render(
      <InputText
        label="Title"
        value={value}
        onChange={text => {
          value = text;
        }}
      />
    );
    expect(queryByText('Title')).toBeTruthy();
  });

  // test('shows proper label when rendered', () => {
  //   const { queryByText } = render(<Button label="Title" />);
  //   expect(queryByText('Title')).toBeTruthy();
  // });

  // test('calls correct function on click', () => {
  //   const onClick = jest.fn();
  //   const { getByText } = render(<Button onClick={onClick} label="Title" />);
  //   fireEvent.click(getByText('Title'));
  //   expect(onClick).toHaveBeenCalled();
  // });
});
