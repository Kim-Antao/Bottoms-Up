import LandingPage from '../../components/LandingPage/LandingPage';
import RandomDrink from '../../components/RandomDrink/RandomDrink';
import video from '../../assets/media/homepage-video.mp4';

const Home = () => {
  return (
    <>
      <LandingPage video={video} heading='MIXOLOGIST' para='Savour the elegance and sophistication of a perfectly balanced cocktail.' buttonLabel='Explore'/>
      <RandomDrink/>
    </>
  )
}

export default Home
