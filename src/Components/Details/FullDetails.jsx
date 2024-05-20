import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Fulldetails.css';

const FullDetails = () => {
    const { _id } = useParams();
    const [data, setData] = useState({});

    const getApiData = async () => {
        try {
            let res = await axios.get("https://sadibackend.onrender.com/api/user/" + _id);
            console.log(res);
            setData(res.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getApiData();
        window.scrollTo({
            top:0,
            behavior:"smooth"
          })
    }, []);

    return (
        <div className="full-details-container">
            <h2>Full Details</h2>
            <div className="details-card">

                <div className="details-content">
                    <p><strong>Name:</strong> {data.name}</p>
                    <p><strong>Age:</strong> {data.age}</p>
                    <p><strong>Birthplace:</strong> {data.birthplace}</p>
                    <p><strong>Date of Birth:</strong> {data.dateofbirth}</p>
                    <p><strong>Gender:</strong> {data.gender}</p>
                    <p><strong>Education:</strong> {data.education}</p>
                    <p><strong>Email:</strong> {data.email}</p>
                    <p><strong>Phone:</strong> {data.phone}</p>
                    <p><strong>Address:</strong> {data.address}, {data.city}, {data.state} - {data.pin}</p>
                    <p><strong>Religion:</strong> {data.religion}</p>
                    <p><strong>Cast:</strong> {data.cast}</p>
                    <p><strong>Subcast:</strong> {data.subcast}</p>
                    <p><strong>Gotra:</strong> {data.gotra}</p>
                    <p><strong>Mother's Gotra:</strong> {data.mgotra}</p>
                    <p><strong>Father's Gotra:</strong> {data.ggotra}</p>
                    <p><strong>Height:</strong> {data.height}</p>
                    <p><strong>Father's Name:</strong> {data.fathername}</p>
                    <p><strong>Mother's Name:</strong> {data.mothername}</p>
                    <p><strong>Siblings:</strong> {data.siblings}</p>
                </div>
                <a href={data.image} target="_blank" rel="noopener noreferrer">
                    <img src={data.image} alt={data.name} className="profile-image" />
                </a>
            </div>
        </div>
    );
}

export default FullDetails;
