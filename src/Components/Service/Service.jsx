import React, { useEffect, useState } from 'react';
import "./Service.css";
import axios from 'axios';
import { Link } from 'react-router-dom';

const Service = () => {
  let login = sessionStorage.getItem("login")
  let gender = sessionStorage.getItem("gender")

  const [data, setData] = useState([]);
  const getApiData = async () => {
    try {
      let res = await axios.get("https://sadibackend.onrender.com/api/user");
      setData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
    getApiData();
  }, []);

  const filterData = data.filter((x) => x.gender !== gender);

  return (
    <>
      <div className="servicemain">
        <div className="ourservice">
          <p>Find Your Match</p>
        </div>
        <div className="servicecard">
          {
            login ?
              filterData.map((item, index) => (
                <div className='servicecardfrist' key={index}>
                  <div className='img'><img src={item.image} alt="" /></div>
                  <p>Name: {item.name}</p>
                  <p>Age : {item.age}</p>
                  <p>Sub Cast : {item.subcast}</p>
                  <button><Link to={`/details/${item._id}`} style={{ textDecoration: "none", color: "white" }}>View Details</Link></button>
                </div>
              )) :
              data.map((item, index) => (
                <div className='servicecardfrist' key={index}>
                  <div className='img'><img src={item.image} alt="" /></div>
                  <p>Name: {item.name}</p>
                  <p>Age : {item.age}</p>
                  <p>Sub Cast : {item.subcast}</p>
                  <button><Link to="/login" style={{ textDecoration: "none", color: "white" }}>View Details</Link></button>
                </div>
              ))
          }
        </div>
      </div>
    </>
  );
}

export default Service;
