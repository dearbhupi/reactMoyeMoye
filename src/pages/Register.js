import React, { useState } from 'react';
import './Register.css';

function Register() {
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted successfully!", { email, password, age });
  }

  setAge(25); // This will cause an error because setAge is not defined 

  return (
    <form >
      <h1>age</h1>
      <div>
        <label htmlFor="email">Email:</label>
        <input className="input-field"
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input className="input-field"
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
       className="button"
       onClick={handleSubmit} type="submit">Register</button>
    </form>
  );
}

export default Register;