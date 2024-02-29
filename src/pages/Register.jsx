// Register.js
import React, { useState } from 'react';
import { useName } from '../hooks/useName'; // Update the import path

export default function Register() {
  const { updateName } = useName();
  const [inputName, setInputName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    updateName(inputName); 
    console.log(inputName);
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          required
          type="text"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
          placeholder="Enter your name"
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
