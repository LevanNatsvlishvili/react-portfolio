import React from 'react';

function Button({ children }) {
  return (
    <button className="px-4 py-2">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {children}
    </button>
  );
}

export default Button;
