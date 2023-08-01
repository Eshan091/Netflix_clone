import React, { useState } from "react";
import "./Signin.css";
import { Link, useNavigate } from "react-router-dom";
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from "./firebase.js";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  // firebase execution
  const app = initializeApp(firebaseConfig);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isUserExist, setUserExist] = useState(false);
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [isLoading, setLoading] = useState(false); // New state for loading status
  const [wrongPassword, setWrongPassword] = useState(false);
  const emailOnChange = (e) => {
    setEmail(e.target.value);
  };

  const passwordOnChange = (e) => {
    setPassword(e.target.value);
  };

  // ending firebase
  const auth = getAuth();
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();

    // Simple email validation check
    const isEmailValid = validateField('email', email);
    setEmailValid(isEmailValid);

    // Simple password validation check
    const isPasswordValid = validateField('password', password);
    setPasswordValid(isPasswordValid);

    if (isEmailValid && isPasswordValid) {
      setLoading(true); // Set loading state to true while authentication is in progress

      signInWithEmailAndPassword(auth, email, password)
        .then((auth) => {
          setLoading(false); // Set loading state back to false after authentication is done
          if (auth) {
            navigate('/banner');
          }
        })
        .catch((error) => {
          setLoading(false); // Set loading state back to false in case of an error
          setUserExist(true);
          setWrongPassword(true);
        });
    }
  };

  // Email and password validation helper function
  const validateField = (fieldName, value) => {
    switch (fieldName) {
      case 'email':
        return value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/);
      case 'password':
        return value.length >= 6;
      default:
        return false; // Added a default case to handle other fields if needed
    }
  };

  return (
    <div className="Signin_banner">
      <div className="containers">
        <h1>Sign In</h1>
        <div className="forms">
          <input type="email" value={email} onChange={emailOnChange} placeholder="abc@gmail.com" />
          {!emailValid && <p style={{ color: 'red', marginLeft: '50px' }}>Email is invalid</p>}
          <input type="password" value={password} onChange={passwordOnChange} placeholder="enter your password" />
          {!passwordValid && <p style={{ color: 'red', marginLeft: '50px' }}>Password must be at least 6 characters long</p>}
          {wrongPassword && <p style={{ color: 'red', marginLeft: '50px' }}>Wrong password. Please try again.</p>}

          <input type="submit" value={isLoading ? 'Loading...' : 'Sign in'} onClick={login} disabled={isLoading} />
        </div>

        <div className="contents">
          {isUserExist && <h2 style={{ color: 'red' }}>User does not exist. Please sign up</h2>}
          <br />
          <h2>
            New to Netflix?<Link to="/signin"> SignUp Now</Link>
          </h2>
          <br />
          <h2>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <Link to="/">Learn more.</Link>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Login;
