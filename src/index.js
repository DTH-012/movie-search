import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.css';
import SearchForm from './components/SearchForm'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
        <h1 className="title">React Movie Search</h1>
        <SearchForm />
      </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
