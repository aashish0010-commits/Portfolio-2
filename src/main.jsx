// src/main.jsx or src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Function to dynamically load external stylesheets
function loadExternalStylesheet(url) {
  const link = document.createElement('link');
  link.href = url;
  link.rel = 'stylesheet';
  link.integrity = 'sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==';
  link.crossOrigin = 'anonymous';
  link.referrerPolicy = 'no-referrer';
  document.head.appendChild(link);
}

// Load Font Awesome stylesheet
loadExternalStylesheet('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
