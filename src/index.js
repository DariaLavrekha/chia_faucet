import React from 'react';
import ReactDOM from 'react-dom';
import './skin/index.css';
import Main from './pages/Main';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Main/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
