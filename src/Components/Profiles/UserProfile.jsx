import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UserProfile = () => {
    const [data, setData] = useState([])
    const gender = sessionStorage.getItem("gender")
    // alert(gender)
    const getApiData = async () => {
        try {
            let res = await axios.get("http://localhost:8000/api/user")
            setData(res.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    const filterData = data.filter((x) => x.gender !== gender)
    console.log(filterData)
    useEffect(() => {
        getApiData()
    }, [])
    return (
        <>
            <div className="servicecard">
                {
                    filterData && filterData.map((item, index) =>
                        <div className='servicecardfrist'>
                            <div>
                                <img src={item.image} alt="" />
                                <p>Name : {item.name}</p>
                                <button>View Profile</button>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default UserProfile