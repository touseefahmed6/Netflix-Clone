import React, { useState } from 'react'
import './Style.css';

export default function Navbar() {
  const [inputValue,setInputValue]=useState('');
  const handleInputChange=(event)=>{
    setInputValue(event.target.value);
  }
  const handleOnSubmit=()=>{
    // event.preventDefault();
    alert('You submitted');
    // setInputValue('');
    }
  return (
    <>
    <header className='header1'>
    <img className='img2' src='netflix-logo.png'/>
    <div className='div1'>
    <img className='img1' src='backgroundImage.jpg' alt='backgroundImage'/>
    <div className='div2'>
        <h2>Sign In</h2>
        <input className='input1' type='email' value={inputValue} onChange={handleInputChange} placeholder='Enter email'/>
        <input className='input2' type='password' placeholder='Password'/>
        <a href='#' className='signin' onSubmit={handleOnSubmit}>Sign In </a>
        <label htmlFor='remember' className='label1'>Remeber me</label>
        <input type="checkbox" className='Tick'/>
        <a href='#' className='help'>Need help?</a>
        <label htmlFor='new' className='label2'>New to Netflix?</label>
        <a href='#' className='sign'>Sign up now.</a>
        <p className='para'>This page is protected by Google reCAPTCHA to<br/> ensure you're not a bot.</p>
        <a href='#' className='learn'>Learn more.</a>
    </div>
    </div>
    </header>
    
    </>
  );
}

