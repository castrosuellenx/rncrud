/* eslint-disable prettier/prettier */
import React from 'react';

import {UsersProvider} from './context/UsersContext';
import Routes from './routes';

const App = () => {
  return (
    <UsersProvider>
      <Routes />
    </UsersProvider>
  );
};

export default App;
