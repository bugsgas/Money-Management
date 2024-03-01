import React, { useState, createContext } from 'react';

export const NameContext = createContext();

export function NameProvider({ children }) {
  const [name, setName] = useState('');

  const updateName = (newName) => {
    setName(newName);
  };

  return (
    <NameContext.Provider value={{ name, updateName }}>
      {children}
    </NameContext.Provider>
  );
}
