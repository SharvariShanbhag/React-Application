import React from 'react';
import ReactDOM from 'react-dom/client';  // For React 18 and above
import App from './App';                  // Import the main App component
import './styles/styles.css';             // Import your global CSS

// Create a root element to render your React app into the DOM
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render your app inside the root div
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
