import React from 'react'
import './Footer.css'
import { assets } from '../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer' >
      <div className="footer-content">
       <div className="footer-content-left"> 
          <img src={assets.logo} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam omnis magnam eveniet doloribus! Rerum consequuntur sunt quae error necessitatibus iure ipsam adipisci, labore incidunt quidem dolorem hic officia autem porro.</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
     </div>
     <div className="footer-content-center">
      <h2>COMPANY</h2>
      <ul>
        <li>Home</li>
        <li>About us</li>
        <li> Delivery</li>
        <li> Privacy Policy</li>
      </ul>
     </div>
     <div className="footer-content-right">
      <h2>GETIN TOUCH</h2>
      <ul>
        <li>+1-414-472-9890</li>
        <li>contact@zomato.com</li>
      </ul>
     </div>
      </div>
      <hr/>
      <p className="footer-copyright">Copyright 2024 © Zomato.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
