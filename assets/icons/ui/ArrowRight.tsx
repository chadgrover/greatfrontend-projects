import { IArrowRightProps } from "./ArrowRight.types";

const ArrowRight = ({
  strokeWidth,
  stroke,
  addClassName,
}: IArrowRightProps) => (
  <svg
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={strokeWidth}
    stroke={stroke}
    className={`w-4 h-4 ${addClassName ? addClassName : ""}`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
    />
  </svg>
);

export default ArrowRight;

