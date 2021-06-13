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
});
