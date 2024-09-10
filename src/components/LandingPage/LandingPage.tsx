import './LandingPage.scss';
import Nav from '../Nav/Nav';

type LandingPageProps = {
    video: string,
    heading: string,
    para: string,
    buttonLabel: string
}

const LandingPage = ({video, heading, para, buttonLabel}: LandingPageProps) => {
  return (

    <div className="main-display">
      <video className="main-display__video" autoPlay loop>
        <source src={video} type='video/mp4'/>
      </video>
      <div className="main-display__content">
        <h1 className="main-display__content--heading-font">{heading}</h1>
        <p className="main-display__para">{para}</p>
        <button className="main-display__button">{buttonLabel}</button>
      </div>
    </div>
  )
}

export default LandingPage
