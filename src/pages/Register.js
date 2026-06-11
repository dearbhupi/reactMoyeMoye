import React, { useState, useEffect } from 'react';
import './Register.css';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState(13);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted successfully!", { email, password, age });
  }

  function increaseAge(e) {
    e.preventDefault(); // Added parentheses here to actually call the function
    setAge(age + 1);
  }

  useEffect(() => {
    console.log("Age updated:", age);
  }, [age]);

  return (
    <form onSubmit={handleSubmit}> {/* Best practice: Put submit handler on the form */}
      <h1>{age}</h1>
      
      {/* Changed onclick to onClick */}
      <button onClick={increaseAge}>Increase Age</button> 
      
      <div>
        <label htmlFor="email">Email:</label>
        <input 
          className="input-field"
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input 
          className="input-field"
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="button" type="submit">Register</button>
    </form>
  );
}

export default Register;