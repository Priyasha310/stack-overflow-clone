import React, {useState } from 'react'
import styles from './auth.module.scss'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import axios from 'axios';
import { signupRoute, loginRoute } from 'utils/APIRoutes';
import icon from '../../assets/icon.png'
import AboutAuth from './AboutAuth';
import { signup, login } from '../../store/actions/authAction'

const Auth = () => {

  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const navigate = useNavigate();
  const dispatch = useDispatch();
    
  const handleSwitch = ()=>{
    setIsSignup(!isSignup);
    setName("");
    setEmail("");
    setPassword("");
    setNameError("");
    setEmailError("");
    setPasswordError("");
  }

  const handleValidation = () => {
    let isValid = true;

    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email) {
      setEmailError('Email cannot be empty');
      isValid = false;
    }else if(!emailRegex.test(email)) {
      setEmailError('Enter valid email');
      isValid = false;
    }
    if (!password) {
      setPasswordError('Password cannot be empty');
      isValid = false;
    }
    if (isSignup) {
      if (!name) {
        setNameError('Name cannot be empty');
        isValid = false;
      };
    }
    return isValid;
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    if(handleValidation()){
      if(isSignup){
        const {data} = await axios.post(signupRoute, {name, email, password});
        if (data.status === false) {
          setPasswordError(data.msg);
        }
        if (data.status === true) {
          localStorage.setItem('user_data', JSON.stringify(data.user));
          navigate("/");
        }        
      }
      else{
        const {data} = await axios.post(loginRoute, {email, password});
        if (data.status === false) {
          setPasswordError(data.msg);
        }
        if (data.status === true) {
          localStorage.setItem('user_data', JSON.stringify(data.user));
          navigate("/");
        }
      }
    }
  } 

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!email && !password) {
  //     alert("Enter email and password");
  //   }
  //   if (isSignup) {
  //     if (!name) {
  //       alert("Enter a name to continue");
  //     }
  //     dispatch(signup({ name, email, password }, navigate));
  //   } else {
  //     dispatch(login({ email, password }, navigate));
  //   }
  // };

  return (
    <section className={styles.authSection}>
      {isSignup && <AboutAuth/>}
      <div className={styles.authContainer}>
        {!isSignup && 
        <img src={icon} alt='stack overflow' className={styles.loginLogo}></img>}
        <form onSubmit={handleSubmit}>
          {
            isSignup && 
              <label htmlFor='name'>
                <h4>Display name</h4>
                <input className={styles.input} type='text' name='name' id='name' value={name} onChange={e=>setName(e.target.value)}/>
                <span className='text-error-red text-[10px] py-0 font-normal'>{nameError}</span> 
              </label>
          }
          <label htmlFor='email'>
            <h4>Email</h4>
            <input className={styles.input} type='email' name='email' id='email' value={email} onChange={e=>setEmail(e.target.value)}/> 
            <span className='text-error-red text-[10px] py-0 font-normal'>{emailError}</span>
          </label>
          <label htmlFor='password'>
            <div className='flex justify-between'>
              <h4>Password</h4>
              {!isSignup && 
                <h4 className='text-link-color text-xs font-normal'>Forgot Password?</h4>
              }
            </div>
            <input className={styles.input} type='password' name='password' id='password' value={password} onChange={e=>setPassword(e.target.value)}/> 
            <span className='text-error-red text-[10px] py-0 font-normal'>{passwordError}</span>
            {isSignup && 
              <p className='font-normal pt-1'>Passwords must contain at least eight characters, including at least 1 letter and 1 number.</p>
            }
          </label>
          {isSignup && (
            <label htmlFor='checkbox'>
              <input type='checkbox' name='Confirm Password' id='checkbox'/>
              <p className='pl-1 leading-4 font-normal'><br/>Opt-in to receive occasional product updates, user research invitations, company announcements, and digests.(Non-functional feature)</p> 
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

export default Auth;