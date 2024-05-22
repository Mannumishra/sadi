import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer>
      <div className="footermain">
        <div className="footerfirstdiv">
          <p>Sita Ram Marriage Bureau named the most trusted marriage bureau for our exclusive and hand-picked variety of services. Our job doesn’t just finish at matching you with your other half. We are here to be a part of every step of your story! Our services are tailored to each individual’s preference to make them comfortable.</p>
        </div>
        <div className="footerseconddiv">
          <p>Quick Links</p>
          <div className='quicklinksdiv'>
            <div>
              <p><Link to='/' style={{textDecoration:"none" ,color:"white"}}>Home</Link></p>
              <p><Link to='/about' style={{textDecoration:"none" ,color:"white"}}>About</Link></p>
              <p><Link to='/service' style={{textDecoration:"none" ,color:"white"}}>Find Your Match</Link></p>
            </div>
            <div>
            <p><Link to='/contact' style={{textDecoration:"none" ,color:"white"}}>Contact Us</Link></p>
            <p><Link to='/success' style={{textDecoration:"none" ,color:"white"}}>Success Story</Link></p>
            </div>
          </div>
        </div>
        <div className="footerthirddiv">
          <p>Contact Details</p>
          <div><i className="ri-map-pin-user-line"></i><span>E-138, Main Road, Amar Colony Lajpat Nagar - IV
            Delhi - 110024 India</span></div>
          <div><i className="ri-phone-line"></i> <span><a href="tel:+919540849901">+91 9540849901</a></span></div>
          <div><i className="ri-mail-line"></i><span><a href="mailto:+919540849901">abc@gmail.com</a></span></div>
        </div>
        <div className='footerfourdiv'>
          <p>Follow us</p>
          <div>
          <i className="ri-facebook-circle-fill" style={{color:"	#1877F2"}}></i>
          <i className="ri-instagram-line" style={{color:"#f09433"}}></i>
          <i className="ri-whatsapp-line" style={{color:"	#25D366"}}></i>
          <i className="ri-linkedin-box-fill" style={{color:" #0A66C2"}}></i>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer