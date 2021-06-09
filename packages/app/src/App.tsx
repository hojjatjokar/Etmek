import React from 'react';
import Header from './components/header/header';
import List from './components/list/list';
import Filter from './components/filter/filter';
import AddForm from './components/add-form/add-form';

interface ITodo {
  title: string;
  state: boolean;
}

const App = (): JSX.Element => {
  const [todos, setTodos] = React.useState<ITodo[]>([]);
  const [filter, setFilter] = React.useState<string>('all');

  const handleChangeState = (title: string) => {
    setTodos(
      todos.map((todo: ITodo) => {
        return {
          ...todo,
          state: todo.title === title ? !todo.state : todo.state,
        };
      })
    );
  };

  const filteredTodos: ITodo[] = todos.filter(item => {
    if (filter === 'all') return true;

    if (filter === 'active') return item.state;
    if (filter === 'inactive') return !item.state;
  });

  return (
    <>
      <Header />
      {filteredTodos.length === 0 && <p>list is empty, add your first todo</p>}
      <List items={filteredTodos} onChange={handleChangeState} />
      <Filter
        filters={['all', 'active', 'inactive']}
        setFilter={setFilter}
        activeFilter={filter}
      />
      <AddForm todos={todos} setTodos={setTodos} />
    </>
  );
};

export default App;
