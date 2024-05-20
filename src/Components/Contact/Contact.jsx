import React, { useEffect } from 'react'
import "./Contactr.css"
const Contact = () => {
  useEffect(()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  },[])
  return (
    <>
      <div className='contactusheading'>
        Get In Touch
      </div>
      <div className="contactmain">
        <div className="contactdivfirst">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55978.903122602176!2d77.01773285865784!3d28.729064626452793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d064291430019%3A0x128cbd67a0c94ea6!2sMarriage%20Bureau%20(Guru%20Ji%20Marriage%20Bureau)!5e0!3m2!1sen!2sin!4v1716015176016!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="contactdivsecond">
          <form action="">
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" placeholder="Name" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="Email" />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <input type="text" className="form-control" placeholder="Phone" />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea name="" id="" className='form-control' rows={5} placeholder='Message'></textarea>
            </div>
            <div className="mb-3">
              <button>Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact