import React, { createContext, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import './styles/fontiran.css'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import './styles/outpu2.css'
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  // <React.StrictMode>
     <BrowserRouter>
        <App />
    </BrowserRouter>
  // </React.StrictMode>
);
