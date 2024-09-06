//import React from 'react'
import './LandingPage.scss';
import Nav from '../Nav/Nav';

type LandingPageProps = {
    video:string,
    heading:string,
    buttonLabel: string
}

const LandingPage = ({video, heading, buttonLabel}: LandingPageProps) => {
  return (

    <div className="main-display">
      <Nav/>

      {/* <img className="main-display__image" src={image} alt="" /> */}
      <video className="main-display__video" src={video} autoPlay loop></video>
      <div className="main-display__content">
      <h1>{heading}</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <button>{buttonLabel}</button>
      </div>
      
    </div>
  )
}

export default LandingPage
