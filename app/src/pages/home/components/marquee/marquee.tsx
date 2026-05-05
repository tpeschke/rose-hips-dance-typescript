import ImageShell from "../../../../components/ImageShell/ImageShell";
import "./marquee.css";
import { Fragment } from "react";

export default function Marquee() {
  const basicItems = [
    "Qigong",
    "Muscle Group Rebalancing",
    "Structural Integration",
    "Somatic Experiencing",
    "Feldenkrais Techniques",
    "Tribal-Fusion Belly Dance",
    "Egyptian Cabaret Belly Dance",
  ];
  const marqueeItems = [
    ...basicItems,
    ...basicItems,
    ...basicItems,
    ...basicItems,
    ...basicItems,
  ];

  return (
    <div className="marquee-band">
      <div className="marquee-inner">
        <ImageShell src="star" alt="star" width={25} height={25} />
        {marqueeItems.map((item, index) => (
          <Fragment key={index}>
            <span>{item}</span>
            <ImageShell
              src="star"
              alt="star"
              width={25}
              height={25}
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
}
