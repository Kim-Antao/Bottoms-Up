import { Link } from 'react-router-dom';
import './LandingPage.scss';

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
        <h1 className="main-display__heading">{heading}</h1>
        <p className="main-display__para">{para}</p>
        <Link to="/drinks">
          <button className="main-display__button">{buttonLabel}</button>
        </Link>
      </div>
    </div>
  )
}

export default LandingPage
