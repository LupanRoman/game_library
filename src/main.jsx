import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { StateContext } from '../context/StateContext';
import { AuthContext } from '../context/AuthContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContext>
    <StateContext>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </StateContext>
  </AuthContext>
);
