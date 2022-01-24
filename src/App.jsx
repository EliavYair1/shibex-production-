import './App.css';
import Navbar from './components/navbar';
import Timer from './components/timer';
import Slider from './components/slider';
import SocialInfo from './components/socialInfo';
import Testimonial from './components/testimonial';
import GamePlay from './components/gamePlay';
import Footer from './components/footer';
import Roadmap from './components/roadmap';
// import { Route, Switch } from 'react-router';
// import ShibexNews from './components/ShibexNews';
function App() {
  return (
    <div className="App min-vh-100">
      <Navbar />
      <Slider />

      <Timer />
      <Testimonial />

      <SocialInfo />
      <Roadmap />

      <GamePlay />
      <Footer />
    </div>
  );
}

export default App;
