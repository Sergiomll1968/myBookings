import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './AppRouter.jsx';
import {UserProvider} from './contexts/UserContext.jsx';
import {EnvProvider} from './contexts/EnvContext.jsx';

import './main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <EnvProvider>
        <UserProvider>
          <AppRouter />
        </UserProvider>
      </EnvProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
