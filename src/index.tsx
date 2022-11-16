import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';

import { Routes } from './routes';
import { AuthContextProvider } from './contexts/AuthContext'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode >
    <AuthContextProvider>
      <div className="w-screen h-screen bg-purple-800" >
        <Routes/>
      </div>
    </AuthContextProvider>
  </React.StrictMode>
);

