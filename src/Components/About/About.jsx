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
      <p className='signupheadinh'> Sita Ram Marriage Bureau</p>
      <div className="about">
        <div>
          <h5>Sita Ram Marriage Bureau - Best Marriage Bureau in Gurugram</h5>
          <p>"Samuhik vivah" is a term in Hindi that translates to "mass marriage" in English. It typically refers to a ceremony where multiple couples get married simultaneously, often organized by communities or social organizations. These events are often held to reduce the financial burden on families and promote social cohesion. If you're considering participating in or organizing such an event, it can be a meaningful way to celebrate love and commitment while also fostering community bonds.</p>
          <p>Mass marriages, also known as group marriages or collective marriages, are ceremonies where multiple couples get married at the same time and location. These events are often organized to help couples who might not be able to afford individual weddings due to financial constraints. Mass marriages are common in various cultures and communities around the world and can be organized by religious institutions, government bodies, charities, or community organizations.

The benefits of mass marriages include cost savings for the couples involved, as expenses such as venue rental, decorations, catering, and other ceremony-related costs are shared among the participants. Additionally, these events often promote social cohesion and community involvement, as they bring people together to celebrate love and commitment on a larger scale.

Mass marriages can also have cultural significance, serving as a way to uphold traditions and customs within a community. They may also be viewed as a practical solution in regions where arranged marriages are common, as they allow families to arrange marriages for their children in a more economical manner.

Overall, mass marriages provide an opportunity for couples to celebrate their union while also addressing practical considerations related to wedding expenses.</p>
        </div>
        <div>
          <img src={aboutimage} alt="" />
        </div>
      </div>
    </>
  )
}

export default About