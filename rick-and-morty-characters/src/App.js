import React from 'react';

import Home from './pages/Home'

import { Store } from './Store';


function App() {
  return (
    <Store>
      <Home />
    </Store>
  );
}

export default App;
