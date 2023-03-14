import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { StateContext } from '../context/StateContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StateContext>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </StateContext>
);
