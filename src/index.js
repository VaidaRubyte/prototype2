import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import for React 18
import App from './main';  // Import App component
import './style.css';  

// Get the root element from index.html
const rootElement = document.getElementById('root');

// Create a root for React
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
