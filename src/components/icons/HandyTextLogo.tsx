import React from "react";
import iconUrl from "../../assets/triscribe-icon.png";

const PRODUCT_NAME = "TriScribe";

const HandyTextLogo = ({
  width = 180,
  height,
  className,
}: {
  width?: number;
  height?: number;
  className?: string;
}) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 360 96"
    role="img"
    aria-label="TriScribe"
    xmlns="http://www.w3.org/2000/svg"
  >
    <image href={iconUrl} x="4" y="4" width="88" height="88" />
    <text
      x="112"
      y="62"
      fill="currentColor"
      fontFamily="Inter, ui-sans-serif, system-ui, sans-serif"
      fontSize="42"
      fontWeight="700"
      letterSpacing="-1.5"
    >
      {PRODUCT_NAME}
    </text>
  </svg>
);

export default HandyTextLogo;
