import BeginYourJourney from "./components/beginYourJourney/BeginYourJourney";
import FindYourClass from "./components/findYourClass/findYourClass";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-page">
      {/* <RotatingSun />
      <MainBanner />
      <OurPhilosophy />
      <Marquee /> */}
      <FindYourClass />
      <BeginYourJourney />
      {/* <BackgroundImages /> */}
    </div>
  );
}
