import React, { useState } from 'react'
import icon from '../../assets/icon.png'
import AboutAuth from './AboutAuth';
import styles from './auth.module.scss'

const Auth = () => {

  const [isSignup, setIsSignup] = useState(false);
  const handleSwitch = ()=>{
    setIsSignup(!isSignup);
  }

  return (
    <section className={styles.authSection}>
      {isSignup && <AboutAuth/>}
      <div className={styles.authContainer}>
        {!isSignup && 
        <img src={icon} alt='stack overflow' className={styles.loginLogo}></img>}
        <form>
          {
            isSignup && 
              <label htmlFor='name'>
                <h4>Display name</h4>
                <input className={styles.input} type='text' name='name' id='name'/> 
              </label>
          }
          <label htmlFor='email'>
            <h4>Email</h4>
            <input className={styles.input} type='email' name='email' id='email'/> 
          </label>
          <label htmlFor='password'>
            <div className='flex justify-between'>
              <h4>Password</h4>
              {!isSignup && 
                <h4 className='text-link-color text-xs font-normal'>Forgot Password?</h4>
              }
            </div>
            <input className={styles.input} type='password' name='Password' id='Password'/> 
            {isSignup && 
              <p className='font-normal pt-1'>Passwords must contain at least eight characters, including at least 1 letter and 1 number.</p>
            }
          </label>
          {isSignup && (
            <label htmlFor='checkbox'>
              <input type='checkbox' name='Confirm Password' id='checkbox'/>
              <p className='pl-1 leading-4 font-normal'><br/>Opt-in to receive occasional product updates, user research invitations, company announcements, and digests.</p> 
            </label>
          )}
              
          <button type='submit' className={styles.authBtn}>
            {isSignup? 'Sign up':'Login' }
          </button>
          {
            isSignup && (
              <p>
              <br/>By clicking “Sign up”, you agree to our <span className='text-link-color'>terms of service</span> and acknowledge that you have read and understand our <span className='text-link-color'>privacy policy</span> and <span className='text-link-color'>code of conduct.</span></p>
            )
          }
        </form>
        <p className='text-xs mt-8'>
          {isSignup? 'Already have an account? ': "Don't have an account? "}
          <button type='button' className={styles.switchBtn} onClick={handleSwitch}>
            {isSignup? 'Login': "Signup"}
          </button>
        </p>
      </div>
    </section>
  )
}

export default Auth