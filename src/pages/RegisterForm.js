import React, { useState } from 'react';

function RegisterForm() {
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted successfully!", { age, email });
  }

  // Validation Logic
  const isAdult = Number(age) >= 18;
  const isEduEmail = email.toLowerCase().endsWith('.edu');
  
  // The form section unlocks only if BOTH conditions are met
  const canRegister = isAdult && isEduEmail;

  return (
    <form onSubmit={handleSubmit}>
      {/* Age Input */}
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="age-input">Enter your age: </label>
        <input 
          id="age-input"
          type="number" 
          placeholder="Age"
          value={age} 
          onChange={(e) => setAge(e.target.value)} 
        />
        {/* Warning if under 18 */}
        {age !== '' && !isAdult && (
          <p style={{ color: 'red', margin: '5px 0 0 0' }}>
            You must be at least 18 years old to register.
          </p>
        )}
      </div>

      {/* Email Input */}
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="email-input">Email address: </label>
        <input 
          id="email-input"
          type="email" 
          placeholder="yourname@university.edu"
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        {/* Warning if email doesn't end in .edu */}
        {email !== '' && !isEduEmail && (
          <p style={{ color: 'orange', margin: '5px 0 0 0' }}>
            Registration requires a valid .edu student email address.
          </p>
        )}
      </div>

      {/* Extra Fields & Submit Button: Only reveals when requirements are fulfilled */}
      {canRegister ? (
        <div style={{ borderTop: '1px solid #ccc', paddingTop: '15px' }}>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="name-input">Full Name: </label>
            <input id="name-input" type="text" placeholder="Name" required />
          </div>
          <button type="submit">Register</button>
        </div>
      ) : (
        <p style={{ color: '#666', fontStyle: 'italic' }}>
          Please fix the requirements above to proceed with registration.
        </p>
      )}
    </form>
  );
}

export default RegisterForm;