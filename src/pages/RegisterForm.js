import React, { useState } from 'react';

function RegisterForm() {
  // 1. Initialize state. Using an empty string '' as the default 
  // allows the input placeholder to show up cleanly.
  const [age, setAge] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted with age:", age);
  }

  // 2. Convert the input string to a number for an accurate comparison
  const isAdult = Number(age) >= 18;

  return (
    <form onSubmit={handleSubmit}>
      {/* 3. Link the input value and onChange handler to your state */}
      <label htmlFor="age-input">Enter your age: </label>
      <input 
        id="age-input"
        type="number" 
        placeholder="Age"
        min="0"
        max="120"
        value={age} 
        onChange={(e) => setAge(e.target.value)} 
      />

      {isAdult ? (
        <>
          <div style={{ marginTop: '10px' }}>
            <input type="text" placeholder="Name" required />
          </div>
          <button type="submit" style={{ marginTop: '10px' }}>Register</button>
        </>
      ) : (
        // Only show this warning if they have actually typed an age
        age !== '' && <p style={{ color: 'red' }}>You must be at least 18 years old to register.</p>
      )}
    </form>
  );
}

export default RegisterForm;