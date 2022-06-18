import React, { ReactElement } from 'react';
import './App.css';
import { GhibliHeader } from './components/GhibliHeader';
import { GhibliMovies } from './components/Movies/GhibliMovies';

function App(): ReactElement {
  return (
    <div>
      <GhibliHeader />
      <GhibliMovies />

    </div>
  );
}

export default App;
