import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
const Login = () => {
    const [data, setData] = useState({
        email: "",
        password: ""
    })

    const getInputData = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }
    const postData = async (e) => {
        e.preventDefault()
        try {
            let res = await axios.post("https://sadibackend.onrender.com/api/user/login", data)
            console.log(res)
            if (res.status === 200) {
                sessionStorage.setItem("login", true)
                sessionStorage.setItem("name", res.data.data.name)
                sessionStorage.setItem("_id", res.data.data._id)
                sessionStorage.setItem("gender", res.data.data.gender)
                sessionStorage.setItem("email", res.data.data.email)
                sessionStorage.setItem("phone", res.data.data.phone)
                toast.success("Login Successfully")
                window.location.href = "/"
            }
            else {
                toast.error("Invaild username or password")
            }
        } catch (error) {
            toast.error("Invaild username or password")
        }
    }
    return (
        <>
            <div className="logincomponent">
                <div className="loginbox">
                    <form action="" onSubmit={postData}>
                        <div className="mb-2">
                            <label className="form-label">Email</label>
                            <input type="email" name='email' className="form-control" placeholder="Email" onChange={getInputData} />
                        </div>
                        <div className="mb-2">
                            <label className="form-label">Password</label>
                            <input type="password" name='password' className="form-control" placeholder="password" onChange={getInputData} />
                        </div>
                        <div className="mb-2">
                            <button>Login</button>
                        </div>
                    </form>
                    <div>
                        For create new account <Link to='/signup'>Click Here</Link> <span ><Link>Forget Password?</Link></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login