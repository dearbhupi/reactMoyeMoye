import React, { useState } from 'react';
import './Register.css';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted successfully!", { name, email });
  }
  return (
    <form >
      <div>
        <label htmlFor="name">Name:</label>
        <input className="input-field"
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input className="input-field"
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button
       className="button"
       onClick={handleSubmit} type="submit">Register</button>
    </form>
  );
}

export default Register;