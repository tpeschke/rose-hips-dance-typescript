import { Link } from "react-router-dom";
import "./findYourClass.css";
import ImageShell from "../../../../components/ImageShell/ImageShell";

export default function FindYourClass() {
  return (
    <div className="find-your-class">
      <div className="title">
        <p className="eyebrow">What We Offer</p>
        <h1>
          Find your <span>perfect class</span>
        </h1>
        <div className="eyebrow">
          <ImageShell
            src="star"
            alt="star"
            width={35}
            height={35}
          />
        </div>
      </div>
      <div className="class-catalog-squares">
        <Link to={`/classes#in-person`}>
          <div className="class-square">
            {/* Header Image */}
            <h2>In Person</h2>
            <button className='full-transparent'>
              Explore →
            </button>
          </div>
        </Link>
        <Link to={`/classes#online`}>
          <div className="class-square">
            {/* Header Image */}
            <h2>Online</h2>
            <button className='full-transparent'>
              Explore →
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}
