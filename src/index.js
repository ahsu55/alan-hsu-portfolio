import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Function to add Google Analytics script dynamically
function loadScript(src) {
  const script = document.createElement('script');
  script.src = src;
  script.async = true;
  document.head.appendChild(script);
}

// Add Google Analytics global site tag (gtag.js)
loadScript('https://www.googletagmanager.com/gtag/js?id=G-VK0J01RKKM');

// Initialize Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag() {
  window.dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'G-VK0J01RKKM');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
