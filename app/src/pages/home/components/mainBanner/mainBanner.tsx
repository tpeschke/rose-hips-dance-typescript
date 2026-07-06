import { Link } from "react-router-dom";
import "./mainBanner.css";
import ImageShell from "../../../../components/ImageShell/ImageShell";

export default function MainBanner() {
  return (
    <div className="main-banner">
      <div className="columns">
        <div className='welcome'>
          <p className="eyebrow">Belly Dance for the Soul</p>
          <h1>Move. Heal.</h1>
          <h1>
            <span>Rediscover</span> Yourself.
          </h1>
          <p className="subtitle">
            Where Middle Eastern dance meets modern healing; gently restoring your body, your confidence, and helping you connect to your Aliveness.
          </p>
          <div className="class-buttons">
            <Link to="/classes">
              <button className='blue'>
                Begin Your Journey
              </button>
            </Link>
            <Link to="/contact">
              <button className='transparent'>
                Learn More
              </button>
            </Link>
          </div>
        </div>
        <div className="portrait">
          <ImageShell
            src="portrait"
            alt="Tiarra Anaya, founder and instructor at Rose Hips Dance"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}
