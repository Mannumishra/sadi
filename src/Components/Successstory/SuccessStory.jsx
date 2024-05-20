import React from 'react'
import './Success.css'
import cupple1 from '../Images/cupple1.jpg'
import cupple2 from '../Images/cupple4.jpg'
import cupple3 from '../Images/cupple3.jpg'
import cupple4 from '../Images/cupple4.jpg'
const SuccessStory = () => {
  return (
    <>
    <div className="successmain">
        <div className="successheading">
          <p>SUCCESS STORIES</p>
        </div>
        <div className="successcard">
            <div className="successcardfirst">
              <img src={cupple1} alt="" />
              <p>Amit & Monika</p>
            </div>
            <div className="successcardfirst">
              <img src={cupple2} alt="" />
              <p>Mnish & Kavita</p>
            </div>
            <div className="successcardfirst">
              <img src={cupple3} alt="" />
              <p>Suresh & Preetee</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default SuccessStory