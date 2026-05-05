import { Link } from "react-router-dom";
import ImageShell from "../ImageShell/ImageShell";
import "./footer.css";

export default function Footer() {
  const sections = [
    // {
    //   title: "Stories",
    //   items: [
    //     // "Our Story",
    //     "Philosophy",
    //     "Gallery",
    //   ].map((title) => {
    //     return { title, link: `/` };
    //   }),
    // },
    {
      title: "Connect",
      items: ["Contact"].map((title) => {
        return { title, link: `/contact` };
      }),
    },
  ];
  return (
    <div className="footer">
      <div className="main">
        <h1>
          Rose Hips <span>Dance</span>
        </h1>
        <p className="subtitle">
          Belly Dance for the Soul. Restoring bodies, healing hearts, and
          awakening joy, one movement at a time.
        </p>
        <div className="strike-right">
          <ImageShell
            src="star"
            alt="star"
            width={35}
            height={35}
          />
        </div>
      </div>
      {sections.map(({ title, items }) => {
        return (
          <div key={title}>
            <h2>{title}</h2>
            {items.map(({ title, link }, index) => {
              return (
                <Link key={index} to={link}>
                  <p>{title}</p>
                </Link>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
