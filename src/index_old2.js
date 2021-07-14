import React from 'react';
import ReactDOM from 'react-dom';
import App5 from './components/App5';
import {Lista, Item} from './components/Lista';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
        <App5 title="Titulo">
            Conteudo?
        </App5>
        <Lista title="Titulo">
            Conteudo?
        </Lista>
  </React.StrictMode>,
    document.getElementById('root')

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
