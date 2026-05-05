import ImageShell from "../ImageShell/ImageShell";
import "./rotatingSun.css";

interface Props {
  sunDimensions?: number,
  isLoading?: boolean
}

export default function RotatingSun({sunDimensions = 1350, isLoading = false}: Props) {
  return (
    <div className={`rotating-sun ${isLoading && 'loading'}`}>
      <ImageShell
        src="sun"
        alt="rotating sun"
        width={sunDimensions}
        height={sunDimensions}
      />
    </div>
  );
}
