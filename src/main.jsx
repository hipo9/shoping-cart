import ReactDOM from 'react-dom/client';
import { MyStoreApp } from './MyStoreApp';
import { BrowserRouter } from 'react-router-dom';
import './styles.scss';
import React from 'react';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <BrowserRouter>
      <MyStoreApp />
    </BrowserRouter>
  // </React.StrictMode>
);
