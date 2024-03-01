import { useContext } from 'react';
import { NameContext } from '../context/NameContext'

export function useName() {
  const context = useContext(NameContext);
  return context;
}
