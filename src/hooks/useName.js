// useName.js
import { useContext } from 'react';
import { NameContext } from '../context/NameContext'; // Update the import path

export function useName() {
  const context = useContext(NameContext);
  return context;
}
