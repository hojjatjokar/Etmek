import React from 'react';
import { Button, InputText } from '@etmek/components';

interface ITodo {
  title: string;
  state: boolean;
}

interface IProps {
  todos: ITodo[];
  setTodos: (todos: ITodo[]) => void;
}

function AddForm({ todos, setTodos }: IProps) {
  const [title, setTitle] = React.useState<string>('');

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        const todo: ITodo = {
          title,
          state: false,
        };

        if (todos) setTodos([...todos, todo]);
        setTitle('');
      }}
    >
      <InputText label="Title" value={title} onChange={setTitle} />
      <Button label="add" type="submit" />
    </form>
  );
}

export default AddForm;
