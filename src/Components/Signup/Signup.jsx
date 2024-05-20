import React, { useState } from 'react'
import "./Signup.css"
import axios from 'axios'
import toast from 'react-hot-toast'
const Signup = () => {
  const [data, setData] = useState({
    name: "",
    fathername: "",
    mothername: "",
    age:"",
    gender: "",
    dateofbirth: "",
    birthplace: "",
    height: "",
    siblings: "",
    religion: "",
    cast: "",
    subcast: "",
    gotra: "",
    mgotra: "",
    ggotra: "",
    education: "",
    companyname: "",
    salary: "",
    address: "",
    pin: "",
    city: "",
    state: "",
    email: "",
    phone: "",
    password: "",
    image: ""
  })

  const getInputData = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }

  const getFileData = (e) => {
    const { name, files } = e.target
    setData({ ...data, [name]: files[0] })
  }

  const formData = new FormData()
  formData.append("name", data.name)
  formData.append("fathername", data.fathername)
  formData.append("mothername", data.mothername)
  formData.append("gender", data.gender)
  formData.append("age", data.age)
  formData.append("dateofbirth", data.dateofbirth)
  formData.append("birthplace", data.birthplace)
  formData.append("height", data.height)
  formData.append("siblings", data.siblings)
  formData.append("religion", data.religion)
  formData.append("cast", data.cast)
  formData.append("subcast", data.subcast)
  formData.append("gotra", data.gotra)
  formData.append("mgotra", data.mgotra)
  formData.append("ggotra", data.ggotra)
  formData.append("education", data.education)
  formData.append("companyname", data.companyname)
  formData.append("salary", data.salary)
  formData.append("address", data.address)
  formData.append("pin", data.pin)
  formData.append("city", data.city)
  formData.append("state", data.state)
  formData.append("email", data.email)
  formData.append("phone", data.phone)
  formData.append("password", data.password)
  formData.append("image", data.image)

  const postData = async (e) => {
    e.preventDefault()
    try {
      let res = await axios.post("https://sadibackend.onrender.com/api/user", formData)
      console.log(res)
      if (res.status === 200) {
        toast.success("Signup Success Fully")
        window.location.href="/login"
      }
    } catch (error) {
      // console.log(error)
    }
  }
  return (
    <>
      <p className='signupheading'>Create New Account</p>
      <div className="singnup">
        <div className="signupform">
          <form action="" onSubmit={postData}>
            <div className="row g-3">
              <div className="col mb-3">
                <label htmlFor=""> Name  <span><sup className='text-danger'>*</sup></span></label>
                <input type="text" name='name' className="form-control" onChange={getInputData} placeholder="Name" required />
              </div>
              <div className="col mb-3">
                <label htmlFor="">Father Name <span><sup className='text-danger'>*</sup></span></label>
                <input type="text" name='fathername' className="form-control" onChange={getInputData} placeholder="Father Name" required />
              </div>
              <div className="col mb-3">
                <label htmlFor="">Mother Name <span><sup className='text-danger'>*</sup></span></label>
                <input type="text" name='mothername' className="form-control" onChange={getInputData} placeholder="Mother Name" required />
              </div>
              <div className="col mb-3">
                <label htmlFor="">Age <span><sup className='text-danger'>*</sup></span></label>
                <input type="text" name='age' className="form-control" onChange={getInputData} placeholder="Age" required />
              </div>
            </div>
            <div className="row g-3">
              <div className="col mb-3">
                <label htmlFor="">Gender <span><sup className='text-danger'>*</sup></span></label>
                <select name="gender" id="" className='form-control' onChange={getInputData} required>
                  <option value="Select gender" >Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className="col mb-3">
                <label htmlFor="">Date Of Birth <span><sup className='text-danger'>*</sup></span></label>
                <input type="date" name='dateofbirth' className="form-control" onChange={getInputData} placeholder="DOB" required />
              </div>
              <div className="col mb-3">
                <label htmlFor="">Place Of Birth <span><sup className='text-danger'>*</sup></span></label>
                <input type="text" name='birthplace' className="form-control" onChange={getInputData} placeholder="Birth Place" required />
              </div>
              <div className="col mb-3">
                <label htmlFor="">Height <span><sup className='text-danger'>*</sup></span></label>
                <input type="text" name='height' className="form-control" onChange={getInputData} placeholder="Height" required />
              </div>
              <div className="col mb-3">
                <label htmlFor="">Siblings <span><sup className='text-danger'>*</sup></span></label>
                <input type="text" name='siblings' className="form-control" onChange={getInputData} placeholder="Siblings" required />
              </div>
            </div>
            <div className="row g-3">
              <div className="col mb-3">
                <label htmlFor="">Religion <span><sup className='text-danger'>*</sup></span></label>
                <input type="text" name='religion' className="form-control" onChange={getInputData} placeholder="Religion" required />
              </div>
              <div className="col mb-3">
                <label htmlFor="">Cast <span><sup className='text-danger'>*</sup></span></label>
                <select name="cast" id="" className='form-control' onChange={getInputData} required>
                  <option value="Select gender" >Select Cast</option>
                  <option value="Genral">Genral</option>
                  <option value="OBC">OBC</option>
                  <option value="SC">SC</option>
                  <option value="ST">ST</option>
                </select>
              </div>
              <div className="col mb-3">
                <label htmlFor="">SubCast <span><sup className='text-danger'>*</sup></span></label>
                <input type="text" name='subcast' className="form-control" onChange={getInputData} placeholder="Sub Cast" required />
              </div>
              <div className="col mb-3">
                <label htmlFor="">Self Gotra <span><sup className='text-danger'>*</sup></span></label>
                <input type="text" name='gotra' className="form-control" onChange={getInputData} placeholder="Gotra" required />
              </div>
              <div className="col mb-3">
                <label htmlFor="">Mother Gotra <span><sup className='text-danger'>*</sup></span></label>
                <input type="text" name='mgotra' className="form-control" onChange={getInputData} placeholder="Mother Gotra" required />
              </div>
              <div className="col mb-3">
                <label htmlFor="">Grand Mother Gotra <span><sup className='text-danger'>*</sup></span></label>
                <input type="text" name='ggotra' className="form-control" onChange={getInputData} placeholder="Grand Mother Gotra" required />
              </div>
            </div>
            <div className="row g-3">
              <div className="col mb-3">
                <label htmlFor="">Educations <span><sup className='text-danger'>*</sup></span></label>
                <input type="text" name='education' className="form-control" onChange={getInputData} placeholder="Education" required />
              </div>
              <div className="col mb-3">
                <label htmlFor="">Workin Company Name</label>
                <input type="text" name='companyname' className="form-control" onChange={getInputData} placeholder="Working Company Name" />
              </div>
              <div className="col mb-3">
                <label htmlFor="">Anual Salary</label>
                <input type="text" name='salary' className="form-control" onChange={getInputData} placeholder="Anual Salary" />
              </div>
            </div>
            <div className="row g-3">
              <div className="col mb-3">
                <label htmlFor="">Address <span><sup className='text-danger'>*</sup></span></label>
                <textarea name="address" id="" onChange={getInputData} className='form-control' rows={1} placeholder='Address' required></textarea>
              </div>
            </div>
            <div className="row g-3">
              <div className="col mb-3">
                <label htmlFor="">Pin <span><sup className='text-danger'>*</sup></span></label>
                <input type="text" name='pin' className="form-control" onChange={getInputData} placeholder="Pin" required />
              </div>
              <div className="col mb-3">
                <label htmlFor="">City <span><sup className='text-danger'>*</sup></span></label>
                <input type="text" name='city' className="form-control" onChange={getInputData} placeholder="city" required />
              </div>
              <div className="col mb-3">
                <label htmlFor="state">State <span><sup className='text-danger'>*</sup></span></label>
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

            </div>
            <div className="row g-3">
              <div className="col mb-3">
                <label htmlFor="">Email <span><sup className='text-danger'>*</sup></span></label>
                <input type="email" name='email' className="form-control" onChange={getInputData} placeholder="Email" required />
              </div>
              <div className="col mb-3">
                <label htmlFor="">Phone Number <span><sup className='text-danger'>*</sup></span></label>
                <input type="text" name='phone' className="form-control" onChange={getInputData} placeholder="Phone Number" required />
              </div>
              <div className="col mb-3">
                <label htmlFor="">Password <span><sup className='text-danger'>*</sup></span></label>
                <input type="password" name='password' className="form-control" onChange={getInputData} placeholder="Password" required />
              </div>
            </div>
            <div className="row g-3">
              <div className="col mb-3">
                <label htmlFor="">Image <span><sup className='text-danger'>*</sup></span></label>
                <input type="file" name='image' className="form-control" onChange={getFileData} placeholder="Image" required />
              </div>
            </div>
            <div className="mb-3">
              <button>Sign Up</button>
            </div>
          </form>
        </div>

      </div>
    </>
  )
}

export default Signup