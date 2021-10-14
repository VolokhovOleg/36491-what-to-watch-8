import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {films} from './moks/films';

ReactDOM.render(
  <React.StrictMode>
    <App
      films={films}
    />
  </React.StrictMode>,
  document.getElementById('root'));
