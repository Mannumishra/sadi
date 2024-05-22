import React, { useEffect, useState } from 'react'
import './Success.css'
import axios from 'axios'
const SuccessStory = () => {
  const [successData, setsuccessData] = useState([])

  const getApiData = async () => {
    try {
      let res = await axios.get("https://sadibackend.onrender.com/api/success")
      setsuccessData(res.data.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getApiData()
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, [])
  return (
    <>
      <div className="successmain">
        <div className="successheading">
          <p>SUCCESS STORIES</p>
        </div>
        <div className="successcard">
          {
            successData.map((item, index) =>
              <div className="successcardfirst">
                <img src={item.image} alt="" />
                <p>{item.husbandname} & {item.wifename}</p>
                <p style={{ fontSize: 15, textAlign: "center", fontWeight: 600 }}>{item.successmess}</p>
              </div>
            )
          }
        </div>
      </div>
    </>
  )
}

export default SuccessStory