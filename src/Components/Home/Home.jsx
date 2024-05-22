import React, { useEffect } from 'react'
import './Home.css'
import banare1 from '../Images/samuhik vivah 2.jpg'
import banare2 from '../Images/samuhik vivah 3.jpg'
import banare3 from '../Images/samuhik vivah.jpg'
import banare4 from '../Images/banare3.jpg'
import banare5 from '../Images/banare2.jpg'
import About from '../About/About'
import Service from '../Service/Service'
import SuccessStory from '../Successstory/SuccessStory'
const Home = () => {
  const getInputData = () => {

  }

  const getFileData = () => {

  }
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, [])
  return (
    <>

      <section>
        <div>
          <div className="container-fluid">
            <form action="">
              <div className="row formrow">
                <p className='signupheadinh'>Fill Details for Create Account </p>
                <div className="col-md-4 mb-2">
                  <label htmlFor="">Name</label>
                  <input type="text" name="name" id="" placeholder='Name' className='form-control' />
                </div>
                <div className="col-md-4 mb-2">
                  <label htmlFor="">Father Name</label>
                  <input type="text" name="name" id="" placeholder='Name' className='form-control' />
                </div>
                <div className="col-md-4 mb-2">
                  <label htmlFor="">Mother Name</label>
                  <input type="text" name="name" id="" placeholder='Name' className='form-control' />
                </div>
                <div className="col-md-4 mb-2">
                  <label htmlFor="age">Age <span><sup className="text-danger">*</sup></span></label>
                  <input type="text" name="age" className="form-control" onChange={getInputData} placeholder="Age" required />
                </div>
                <div className="col-md-4 mb-2">
                  <label htmlFor="gender">Gender <span><sup className="text-danger">*</sup></span></label>
                  <select name="gender" className="form-control" onChange={getInputData} required>
                    <option value="Select gender">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div className="col-md-4 mb-2">
                  <label htmlFor="dateofbirth">Date Of Birth <span><sup className="text-danger">*</sup></span></label>
                  <input type="date" name="dateofbirth" className="form-control" onChange={getInputData} placeholder="DOB" required />
                </div>
                <div className="col-md-4 mb-2">
                  <label htmlFor="birthplace">Place Of Birth <span><sup className="text-danger">*</sup></span></label>
                  <input type="text" name="birthplace" className="form-control" onChange={getInputData} placeholder="Birth Place" required />
                </div>
                <div className="col-md-4 mb-2">
                  <label htmlFor="height">Height <span><sup className="text-danger">*</sup></span></label>
                  <input type="text" name="height" className="form-control" onChange={getInputData} placeholder="Height" required />
                </div>
                <div className="col-md-4 mb-2">
                  <label htmlFor="siblings">Siblings <span><sup className="text-danger">*</sup></span></label>
                  <input type="text" name="siblings" className="form-control" onChange={getInputData} placeholder="Siblings" required />
                </div>
                <div className="col-md-4 mb-2">
                  <label htmlFor="subcast">Sub Caste <span><sup className="text-danger">*</sup></span></label>
                  <input type="text" name="subcast" className="form-control" onChange={getInputData} placeholder="Sub Caste" required />
                </div>
                <div className="col-md-4 mb-2">
                  <label htmlFor="gotra">Self Gotra <span><sup className="text-danger">*</sup></span></label>
                  <input type="text" name="gotra" className="form-control" onChange={getInputData} placeholder="Gotra" required />
                </div>
                <div className="col-md-4 mb-2">
                  <label htmlFor="mgotra">Mother Gotra <span><sup className="text-danger">*</sup></span></label>
                  <input type="text" name="mgotra" className="form-control" onChange={getInputData} placeholder="Mother Gotra" required />
                </div>
                <div className="col-md-4 mb-2">
                  <label htmlFor="ggotra">Grandmother Gotra <span><sup className="text-danger">*</sup></span></label>
                  <input type="text" name="ggotra" className="form-control" onChange={getInputData} placeholder="Grandmother Gotra" required />
                </div>
                <div className="col-md-4 mb-2">
                  <label htmlFor="education">Education <span><sup className="text-danger">*</sup></span></label>
                  <input type="text" name="education" className="form-control" onChange={getInputData} placeholder="Education" required />
                </div>
                <div className="col-md-4 mb-2">
                  <label htmlFor="companyname">Working Company Name</label>
                  <input type="text" name="companyname" className="form-control" onChange={getInputData} placeholder="Working Company Name" />
                </div>
                <div className="col-md-4 mb-2">
                  <label htmlFor="salary">Annual Salary</label>
                  <input type="text" name="salary" className="form-control" onChange={getInputData} placeholder="Annual Salary" />
                </div>

                <div className="col-md-4 mb-2">
                  <label htmlFor="address">Address <span><sup className="text-danger">*</sup></span></label>
                  <textarea name="address" onChange={getInputData} className="form-control" rows={1} placeholder="Address" required></textarea>
                </div>
                <div className="col-md-4 mb-2">
                  <label htmlFor="pin">Pin <span><sup className="text-danger">*</sup></span></label>
                  <input type="text" name="pin" className="form-control" onChange={getInputData} placeholder="Pin" required />
                </div>
                <div className="col-md-4 mb-2">
                  <label htmlFor="city">City <span><sup className="text-danger">*</sup></span></label>
                  <input type="text" name="city" className="form-control" onChange={getInputData} placeholder="City" required />
                </div>
                <div className="col-md-4 mb-2">
                  <label htmlFor="state">State <span><sup className="text-danger">*</sup></span></label>
                  <select name="state" id="state" className="form-control" onChange={getInputData} required>
                    <option value="">Select State</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="West Bengal">West Bengal</option>
                    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Lakshadweep">Lakshadweep</option>
                    <option value="Puducherry">Puducherry</option>
                  </select>
                </div>
                <div className="col-md-4 mb-2">
                  <label htmlFor="email">Email <span><sup className="text-danger">*</sup></span></label>
                  <input type="email" name="email" className="form-control" onChange={getInputData} placeholder="Email" required />
                </div>
                <div className="col-md-4 mb-2">
                  <label htmlFor="phone">Phone Number <span><sup className="text-danger">*</sup></span></label>
                  <input type="text" name="phone" className="form-control" onChange={getInputData} placeholder="Phone Number" required />
                </div>
                <div className="col-md-4 mb-2">
                  <label htmlFor="password">Password <span><sup className="text-danger">*</sup></span></label>
                  <input type="password" name="password" className="form-control" onChange={getInputData} placeholder="Password" required />
                </div>
                <div className="col-md-4 mb-2">
                  <label htmlFor="image">Image <span><sup className="text-danger">*</sup></span></label>
                  <input type="file" name="image" className="form-control" onChange={getFileData} placeholder="Image" required />
                </div>
              </div>
              <div className="row mb-3 ">
                <button className='btnsign'>Create Account </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <div className='banre'>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            {/* <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button> */}
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={banare1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={banare2} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={banare3} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={banare4} className="d-block w-100" alt="..." />
            </div>
            {/* <div className="carousel-item">
              <img src={banare5} className="d-block w-100" alt="..." />
            </div> */}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <section>
        <About />
      </section>
      <section>
        <Service />
      </section>
      <section>
        <SuccessStory />
      </section>
    </>
  )
}

export default Home