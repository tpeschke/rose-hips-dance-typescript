import ImageShell from "../../../../components/ImageShell/ImageShell";
import "./ourPhilosophy.css";

export default function OurPhilosophy() {
  return (
    <div className="story-banner-shell">
      <div id="story-banner" className="story-banner">
        <div>
          <ImageShell
            src="philosophy"
            alt={"The Joy of Movement"}
            width={775}
            height={450}
          />
        </div>
        <div>
          <p className="strike-right">Our Philosophy</p>
          <h1>
            Dance is medicine for the{" "}
            <span className="italic">whole self</span>
          </h1>
          <p className="subtitle">
            Tiarra’s love for dance and mental health began in childhood, an underlying thread that would guide her for years to come. In a search to rediscover her own sense of aliveness, she journeyed through many modalities—Eastern and Western, mystical and scientific—gathering wisdom from each path she encountered.
          </p>
          <p className="subtitle">
            Over time, she began to see the same truths echoing across traditions, like a rhythm beneath the surface. From these rhythms, Rose Hips Dance was born—a weaving together of movement, connection, and healing.
          </p>
          <p className="subtitle">
            Here, dance becomes more than expression; it becomes a pathway. Through intentional movement, shared community, and embodied awareness, space is created for deep healing and a return to aliveness.
          </p>
          {/* <button className={`${lemonade.className} antialiased gold`}>
            Our Story
          </button> */}
        </div>
      </div>
    </div>
  );
}
