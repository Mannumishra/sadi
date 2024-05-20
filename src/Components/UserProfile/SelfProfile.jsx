import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./Selfprofile.css"
import { Link } from 'react-router-dom'

const SelfProfile = () => {
  const logout = () => {
    sessionStorage.clear()
    window.location.href = "/login"
  }
  // const _id = sessionStorage.getItem("_id")
  const [data, setData] = useState({})

  const getApiData = async () => {
    try {
      let res = await axios.get("https://sadibackend.onrender.com/api/user/" + sessionStorage.getItem("_id"))
      setData(res.data.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
    getApiData()
  }, [])
  return (
    <>
      <section>
        <div className="selfprofile">
          <div className="selfprofilefirst">
            <img src={data.image} alt="" style={{ height: 300 }} />
          </div>
          <div className="selprofilesecond">
            <table className="table table-bordered table-striped table-hover">
              <tbody>
                <tr>
                  <th>Name</th>
                  <td>{data.name}</td>
                </tr>
                <tr>
                  <th>Father Name</th>
                  <td>{data.fathername}</td>
                </tr>
                <tr>
                  <th>Mother Name</th>
                  <td>{data.mothername}</td>
                </tr>
                <tr>
                  <th>Gender</th>
                  <td>{data.gender}</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>{data.email}</td>
                </tr>
                <tr>
                  <th>Phone</th>
                  <td>{data.phone}</td>
                </tr>
                <tr>
                  <th>Name</th>
                  <td>{data.name}</td>
                </tr>
                <tr>
                  <td ><Link to={`/update-profile/${data._id}`} className='profilebutton'>Update</Link></td>
                  <td ><Link to={`/details/${data._id}`} className='profilebutton'>View Profile</Link></td>
                </tr>
                <tr>
                  <td colSpan={2}><Link onClick={logout} className='profilebutton'>Logout</Link></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  )
}

export default SelfProfile