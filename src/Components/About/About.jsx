import React, { useEffect } from 'react'
import aboutimage from '../Images/bridaltech.webp'
import "./About.css"
const About = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, [])
  return (
    <>
      <div className="about">
        <div>
          <h5>Samuhik Vivah - Best Marriage Bureau in Delhi</h5>
          <p>Samuhik Vivah the most elite Delhi/NCR marriage bureau for our exclusive matrimonial services and hand-picked variety of marriage services, Samuhik Vivah goes beyond merely matching you with your better half. We are committed to being a part of every step of your story! Our marriage bureau services are tailored to each individual’s preferences to ensure comfort and ease. With our personalized matchmaking services and a non-judgmental environment, you can relax while searching for the most suitable and exclusive matches for marriage.</p>
          <p>
            Our matchmaking experts, with over 20 years of experience in the matrimonial bureau industry, have come together to provide authentic, genuine, and personalized services to our esteemed members. We have extensive experience dealing with elite, top-notch families from all castes and communities, both in India and abroad. Feel free to get in touch with us to experience the difference. As the saying goes, marriages are made in heaven, but we help solemnize them.</p>

          <p>
            Are you ready to embark on a journey of love, companionship, and lifelong commitment? At Samuhik Vivah, we believe that every individual deserves to find their perfect match – someone who understands, supports, and shares their dreams. Let's start your journey of finding the perfect life partner with our matchmaking experts.
          </p>
          <p>
            Samuhik Vivah is a trusted, high-class marriage bureau dedicated to facilitating meaningful connections and fostering lasting relationships. With years of experience and a deep understanding of cultural nuances, we pride ourselves on our truly personalized services.Samuhik Vivah</p>
          <p><strong>Our Mission :</strong></p>
          <p>Our mission is simple yet profound – to bring hearts together and unite souls in matrimony. We strive to make the journey of finding a life partner smooth, enjoyable, and fulfilling for all our clients.</p>
        </div>
        <div>
          <img src={aboutimage} alt="" />
        </div>
      </div>
    </>
  )
}

export default About