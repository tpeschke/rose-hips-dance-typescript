import { Link } from "react-router-dom";
import ImageShell from "../../../components/ImageShell/ImageShell";
import { createID } from "../utilities/classInfo";

interface Props {
  classDetails: {
    title: string,
    image?: string,
    skillLevel: string,
    body: string[],
    prereqs: string[],
    time: string,
    address?: string,
    cost: number
  };
  isOdd: Boolean;
}

export default function ClassCard({ classDetails, isOdd }: Props) {
  const { title, image = 'bellyDanceForSoul.jpg', skillLevel, body, prereqs, time, address, cost } = classDetails;

  function formatPrereqs(prereqs: string[]) {
    if (prereqs.length === 0) return "None";

    return prereqs.reduce((currentString, req, index) => {
      return (
        currentString + ` ${req}${index === prereqs.length - 1 ? "" : ","}`
      );
    }, "");
  }

  return (
    <div key={title} className={"class-card" + (isOdd ? " odd" : "")}>
      <div className="image-shell">
        <div id={createID(title)} className="nav-id"></div>
        <h1>{title}</h1>
        <ImageShell
          src='bellyDanceForTheSoul'
          alt={title}
          width={400}
          height={400}
        />
      </div>
      <div className="class-body">
        <p>
          <strong>
            Skill Level:{" "}
          </strong>
          {skillLevel}
        </p>
        {body.map((paragraph, index) => (
          <p key={index} className="gray">
            {paragraph}
          </p>
        ))}
        <p>
          <strong>
            Prerequisite:{" "}
          </strong>{" "}
          {formatPrereqs(prereqs)}
        </p>
        <p>
          <strong>
            Time:{" "}
          </strong>{" "}
          {time}
        </p>
        {address && <p>
          <strong>
            Address:{" "}
          </strong>{" "}
          {address}
        </p>}
        <p>
          <strong>
            Cost:{" "}
          </strong>{" "}
          ${cost} (for series)
        </p>
        <Link to={`/classes/registration/${title}`}>
          <button className='transparent'>
            Book This Class
          </button>
        </Link>
      </div>
    </div>
  );
}
