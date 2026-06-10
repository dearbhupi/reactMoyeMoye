import React from 'react'

function RegisterForm() {
    
    function handleSubmit(e) {
        e.preventDefault() // prevent the reloading of the page
        console.log("Form submitted")
    };

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" 
        placeholder="Name"
       />
        {/* <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" /> */}

        <button type="submit">Register</button>
    </form>
  )
}

export default RegisterForm

