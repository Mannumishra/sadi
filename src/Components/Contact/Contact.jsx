import React, { useEffect, useState } from 'react'
import "./Contactr.css"
import axios from 'axios'
const Contact = () => {

  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })

  const getInputData = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }

  const postData = async (e) => {
    e.preventDefault()
    try {
        let res = await axios.post("https://sadibackend.onrender.com/api/contact" ,data)
        console.log(res)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, [])
  return (
    <>
      <div className='contactusheading'>
        Get In Touch
      </div>
      <div className="contactmain">
        <div className="contactdivfirst">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55978.903122602176!2d77.01773285865784!3d28.729064626452793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d064291430019%3A0x128cbd67a0c94ea6!2sMarriage%20Bureau%20(Guru%20Ji%20Marriage%20Bureau)!5e0!3m2!1sen!2sin!4v1716015176016!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="contactdivsecond">
          <form action="" onSubmit={postData}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input name='name' type="text" className="form-control" onChange={getInputData} placeholder="Name" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" name='email' className="form-control" onChange={getInputData} placeholder="Email" />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <input type="text" name='phone' className="form-control" onChange={getInputData} placeholder="Phone" />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea name="message" id=""  className='form-control' rows={5} onChange={getInputData} placeholder='Message'></textarea>
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