import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './AppRouter.jsx';
import {UserProvider} from './contexts/UserContext.jsx';

import './main.css';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <AppRouter />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
