const HandyHand = ({
  width = 126,
  height = 126,
}: {
  width?: number | string;
  height?: number | string;
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 126 126"
    role="img"
    aria-label="TriScribe"
    xmlns="http://www.w3.org/2000/svg"
  >
    <image href={iconUrl} width="126" height="126" />
  </svg>
);

export default HandyHand;
import iconUrl from "../../assets/triscribe-icon.png";
