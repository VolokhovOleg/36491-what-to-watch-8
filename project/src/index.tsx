import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {films, reviews} from './moks/films';

ReactDOM.render(
  <React.StrictMode>
    <App
      films={films}
      reviews={reviews}
    />
  </React.StrictMode>,
  document.getElementById('root'));
