import React from 'react'
import './Form.css'

const Form = () => {
  return (
    <form className='form'>
        <label>Email: (Required)</label>
            <input type="email" name="email" required />

         <label>Full Name: (Required)</label>
            <input type="text" name="fullName" required />

         <label>Company:</label>
            <input type="text" name="company" />

         <label>Message:</label>
            <textarea name="message"></textarea>

        <button type="submit">SEND</button>
    </form>
  )
}

export default Form;
