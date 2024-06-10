import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../assets/assets'
const LoginPopup = ({ setShowLogin }) => {

const [currState,setCurrState]=useState("sign up")

  return (
    <div className='login-popup'>
      <form  className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick ={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="Login-popup-inputs">
          {currState==="Login"?<></>:<input type='text' placeholder='Your name'required/>}
            <input type='email' placeholder='Your email' required/>
            <input type='password' placeholder='password' required/>
        </div>
        <button>{currState==="sign up"?"create account":"Login"}</button>
        <div className="login-popup-condition">
          <input type='checkbox' required/>
          <p>By Continuing,i agree to  term of use & Privacy Policy. </p>
        </div>
        {currState==="login"
        ?<p> Create A new Account?<span onClick={()=>setCurrState("sign up")}>Click  Here</span></p>
        :<p>Already have an account <span onClick={()=>setCurrState("Login")}>Login Here</span></p>
        }
      </form>
    </div>
  )
}

export default LoginPopup
