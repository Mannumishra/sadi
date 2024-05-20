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
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, [])
  return (
    <>
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