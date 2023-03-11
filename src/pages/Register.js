import React from 'react';
import { useState } from 'react';
import '../pages/Register.css';
function Login12() {
  return (
    <>
      <img className='clouds' />
      <div className='signup-form'>
        <header className='signup-header'>
          <h2>Sign Up</h2>
          <h3>It's quick & simple</h3>
        </header>
        <form className='form'>
          <div className='input-group'>
            <input type='text' required />
            <label>Name</label>
            <img src='https://cdn-icons-png.flaticon.com/512/1077/1077012.png' />
          </div>
          <div className='input-group'>
            <input type='email' required />
            <label>Email</label>
            <img src='https://cdn-icons-png.flaticon.com/512/9068/9068642.png' />
          </div>
          <div className='input-group'>
            <input type='password' required pattern='.{8,}' />
            <label>Password</label>
            <img src='https://cdn-icons-png.flaticon.com/512/4049/4049927.png' />
          </div>
          <h4>At least 8 character</h4>
          <p>
            Signed up already? <a href='#'>Login here</a>
          </p>
          <button type='button'>
            Join Us
            <i className='fa-sharp fa-solid fa-arrow-right'></i>
          </button>
        </form>
      </div>
    </>
  );
}

export default Login12;
