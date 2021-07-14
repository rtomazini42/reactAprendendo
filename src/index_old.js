import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import App2 from './components/App2';
import App3 from './components/App3';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
        <App2 title="Titulo">
            Conteudo?
        </App2>
        <App title="Titulo2">
            Conteudo 2?
        </App>
        <App />
        <App3>
        </App3>
  </React.StrictMode>,
    document.getElementById('root')

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
