import React, { useEffect, useState } from 'react';
import "./Nav.css";
import { useNavigate } from 'react-router-dom';

function Nav() {
  const navigate=useNavigate();
  const onSignIn=(e)=>{
    e.preventDefault();
    navigate('/signin');
  }
  const onSignUp=(e)=>{
    e.preventDefault();
    navigate('/login');
  }
  const [show, handleShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img className="nav_logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="netflix logo" />
      <div className="buttons">
        <button className="nav_button" onClick={onSignIn}>Sign Up</button>
        <button className="nav_button"onClick={onSignUp}>Sign In</button>
      </div>
    </div>
  );
}

export default Nav;
