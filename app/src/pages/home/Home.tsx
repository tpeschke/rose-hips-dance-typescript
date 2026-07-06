import BackgroundImages from "../../components/backgroundImages/backgroundImages";
import RotatingSun from "../../components/rotatingSun/rotatingSun";
import Seo from "../../seo/Seo";
import { homeJsonLd } from "../../seo/structuredData";
import BeginYourJourney from "./components/beginYourJourney/BeginYourJourney";
import FindYourClass from "./components/findYourClass/findYourClass";
import MainBanner from "./components/mainBanner/mainBanner";
import Marquee from "./components/marquee/marquee";
import OurPhilosophy from "./components/ourPhilosophy/ourPhilosophy";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-page">
      <Seo path="/" jsonLd={homeJsonLd} />
      <RotatingSun />
      <MainBanner />
      <OurPhilosophy />
      <Marquee />
      <FindYourClass />
      <BeginYourJourney />
      <BackgroundImages />
    </div>
  );
}
