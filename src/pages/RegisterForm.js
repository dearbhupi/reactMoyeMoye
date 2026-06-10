import React, { useState } from 'react';

function RegisterForm() {
  const [age, setAge] = useState(0);

  function handleSubmit(e) {
    e.preventDefault(); // Prevent page reload
    console.log("Form submitted");
  }

  // Simplified to a clean boolean expression
  const isAdult = age >= 18;

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="number" 
        placeholder="Age"
        value={age || ''} 
        onChange={(e) => setAge(Number(e.target.value))}
      />

      {isAdult ? (
        // Wrapped the multiple inputs in a React Fragment (<>...</>) to fix JSX syntax
        <>
          <input type="text" placeholder="Name" />
          {/* <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" /> 
          */}
          <button type="submit">Register</button>
        </>
      ) : (
        <p>You must be at least 18 years old to register.</p>
      )}
    </form>
  );
}

export default RegisterForm;