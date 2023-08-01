import React from "react";
import { useState } from "react";
import "./Signin.css";
import { Link,useNavigate } from "react-router-dom";
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from "./firebase.js";
import {getAuth , signInWithEmailAndPassword,createUserWithEmailAndPassword} from "firebase/auth";

function SignIn() {
  const app=initializeApp(firebaseConfig);
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [isEmailUse,setIsEmailUse]=useState(false);
  const [loading,setLoading]=useState(false);
  const emailOnChange=(e)=>{
    setEmail(e.target.value);
}
const passwordOnChange=(e)=>{
    setPassword(e.target.value);
}
  const auth=getAuth();
  const navigate = useNavigate();
  const signup=()=>{
    setLoading(true); 
     createUserWithEmailAndPassword(auth,email,password).then(auth=>{
      setLoading(false);
      if(auth)
      {
        navigate('/banner')
      }
     }).catch(error=>{
      setIsEmailUse(true);
     setLoading(false); 
  });
  }
  return (
    <div className="Signin_banner">
      <div className="containers">
        <h1>Sign Up</h1>
        <div className="forms">
          <input type="email"  value={email}  onChange={emailOnChange} placeholder="abc@gmail.com" />
          <input type="password" value={password} onChange={passwordOnChange} placeholder="enter your password" />
          <input type="submit" value={loading ? 'Loading...' : 'Sign up'} onClick={signup}/>
          {/* <input type="checkbox" /> */}
          {/* <labls >Remember me</labls>
          <Link to="/">Need help?</Link> */}
        </div>
        <div className="contents">
        {isEmailUse && <h2 style={{color:'red'}}>email already in use . please login</h2>}
      <br/>
          <h2>
            Already have an account?<Link  to="/login"> Sign In Now</Link >
           
          </h2>
          <br/>
          <h2>
            Thsi page is protected by Google reCAPTCHA to ensure you're not a
            bot. <Link  to="/">Learn more.</Link >
          </h2>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
