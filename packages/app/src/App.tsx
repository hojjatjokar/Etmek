import React from 'react';
import { Button } from '@etmek/components';
import { sum } from '@etmek/utils';
//import Icon from './assets/images/bokken.svg';
// import './style.css';

const App = (): JSX.Element => {
  React.useEffect(() => {
    console.log('utils', sum(1, 2));
  });
  // noob();

  return (
    <div>
      <h1>Hello Etmek</h1>
      <Button label="hojjat" />
    </div>
  );
};

export default App;
