import "./header.css";
import { useEffect, useState } from "react";
import HamburgerMenuIcon from "./component/hamburgerMenuIcon";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [headerColorClass, setHeaderColorClass] = useState("");

  const [storyBannerY, setStoryBannerY] = useState<number | undefined>(
    undefined
  );
  const [beginYourJourneyY, setBeginYourJourneyY] = useState<
    number | undefined
  >(undefined);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    if (document) {
      setStoryBannerY(document.getElementById("story-banner")?.offsetHeight);
      setBeginYourJourneyY(
        document.getElementById("begin-your-journey")?.offsetHeight
      );
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = () => {
    const { scrollY } = window;
    if (scrollY === 0) {
      setHeaderColorClass("");
    } else if (storyBannerY && scrollY >= storyBannerY - 50) {
      setHeaderColorClass("scrolled-header-red");
    } else if (beginYourJourneyY && scrollY >= beginYourJourneyY - 50) {
      setHeaderColorClass("scrolled-header-blue");
    } else {
      setHeaderColorClass("scrolled-header-blue");
    }
  };

  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(false)
    document.body.scrollTop = document.documentElement.scrollTop = 0
  }, [location])

  return (
    <div id="header" className={`header ${headerColorClass}`}>
      <Link to="/">
        <h1>
          Rose Hips <span>Dance</span>
        </h1>
      </Link>

      <HamburgerMenuIcon isOpen={isOpen} setIsOpen={setIsOpen} />

      <ul className={`${isOpen && 'open'}`}>
        <li>
          <Link to="/classes">Classes</Link>
        </li>
        {/* <li>Our Story</li> */}
        <li><Link to="/contact">Contact</Link></li>
        <li>
          <Link to="/classes">
            <button
              className={`${headerColorClass === "scrolled-header-blue" || isOpen ? "gold" : "blue"
                }`}
            >
              Book a Class
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
}
