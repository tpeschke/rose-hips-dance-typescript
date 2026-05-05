import ImageShell from "../../../components/ImageShell/ImageShell";

export default function Divider() {
  return (
    <div className="divider">
      <div className="eyebrow">
        <ImageShell src="star" alt="star" width={35} height={35} />
      </div>
    </div>
  );
}
