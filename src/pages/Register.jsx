// Register.js
import React, { useState } from 'react';
import { useName } from '../hooks/useName';
import './Register.css'

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
      <form className='register-form' onSubmit={handleSubmit}>
        <h2>Name</h2>
        <input
          required
          type="text"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
          placeholder="Enter your name"
        />
        <button className='btn' type="submit">Register</button>
      </form>
    </div>
  );
}
