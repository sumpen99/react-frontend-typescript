/*import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)*/
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
//import './sass/main.scss';
//import "./index.css"
import App from './App';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

