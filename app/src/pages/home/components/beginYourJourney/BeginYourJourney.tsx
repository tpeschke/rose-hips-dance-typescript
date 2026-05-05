import { Link } from "react-router-dom";
import './BeginYourJourney.css';

export default function BeginYourJourney() {
  const petals = [
    {
      left: "8%",
      animationDuration: "9s",
      animationDelay: "0s",
    },
    {
      left: "13%",
      animationDuration: "9s",
      animationDelay: "7s",
    },
    {
      left: "18%",
      animationDuration: "12s",
      animationDelay: "2s",
    },
    {
      left: "23%",
      animationDuration: "11s",
      animationDelay: "8s",
    },
    {
      left: "28%",
      animationDuration: "8s",
      animationDelay: "4s",
    },
    {
      left: "61%",
      animationDuration: "7s",
      animationDelay: "10s",
    },
    {
      left: "72%",
      animationDuration: "11s",
      animationDelay: "1s",
    },
    {
      left: "77%",
      animationDuration: "6s",
      animationDelay: "9s",
    },
    {
      left: "85%",
      animationDuration: "7s",
      animationDelay: "3s",
    },
    {
      left: "89%",
      animationDuration: "8s",
      animationDelay: "4s",
    },
    {
      left: "92%",
      animationDuration: "13s",
      animationDelay: "5s",
    },
  ];

  return (
    <div className="begin-your-journey-shell">
      <div className="petal-shell">
        {petals.map((petal, index) => {
          return <div key={index} className="petal" style={petal}></div>;
        })}
      </div>
      <div id="begin-your-journey" className="begin-your-journey">
        <div>
          <div className="cta-frame">
            <div className="cta-corner cta-corner-tl"></div>
            <div className="cta-corner cta-corner-tr"></div>
            <div className="cta-corner cta-corner-bl"></div>
            <div className="cta-corner cta-corner-br"></div>
            <h1>
              Ready to begin your journey?
            </h1>
          </div>
        </div>
        <div className="journey-details">
          <p className="subtitle">
            Your first class is just the beginning. Join our warm, welcoming
            community and discover what it feels like to truly live inside your
            body again.
          </p>
          <button className='blue'>
            <Link to="/classes">Book Your First Class</Link>
          </button>
          <p className="eyebrow subtitle small">No Experience Needed</p>
        </div>
      </div>
    </div>
  );
}
