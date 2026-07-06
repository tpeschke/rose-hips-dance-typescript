import { Link } from "react-router-dom";
import ImageShell from "../../../components/ImageShell/ImageShell";
import { ClassInfoInterface, ClassPassOption, createID } from "../utilities/classInfo";

interface Props {
  classDetails: ClassInfoInterface
  isOdd: Boolean;
}

export default function ClassCard({ classDetails, isOdd }: Props) {
  const { title, image, skillLevel, body, prereqs, time, location, cost } = classDetails;

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
          src={image}
          alt={`${title} class at Rose Hips Dance`}
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
        {location && <p>
          <strong>
            Location:{" "}
          </strong>{" "}
          {location}
        </p>}
        <p>
          <strong>
            Cost:{" "}
          </strong>{" "}
          {formatCost(cost)}
        </p>
        <div>
          <Link to={`/classes/registration`}>
            <button className='transparent'>
              Book This Class
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}


function formatCost(cost: number | ClassPassOption[]) {
  if (typeof cost === 'number') {
    return `$${cost} (for series)`
  }

  return cost.reduce((currentString: string, { number, cost }: ClassPassOption, index: number) => {
    return currentString + `${index > 0 ? ', ' : ''}$${cost} for ${number} class pass`
  }, '')
}