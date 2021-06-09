import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import AddForm from './add-form';

afterEach(cleanup);

test('has proper inputs', async () => {
  render(<AddForm todos={[]} setTodos={jest.fn} />);

  const items = await screen.findAllByRole('button');
  expect(items).toHaveLength(1);
});
