import Button from "./Button/Button";
import "./HeroSection.css";
const HeroSection = () => {
  return (
    <div className="hero-container">
      <video src="/videos/video-2.mp4" autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button className="btns" style="btn--outline" size="btn--large">
          GET STARTED
        </Button>
        <Button className="btns" style="btn--primary" size="btn--large">
          WATCH TRAILER
        </Button>
      </div>
    </div>
  );
};
export default HeroSection;
