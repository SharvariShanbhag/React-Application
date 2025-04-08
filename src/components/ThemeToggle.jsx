import React from 'react';

const ThemeToggle = ({ theme, setTheme }) => {
  return (
    <button 
      className="theme-toggle" 
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
};

export default ThemeToggle;