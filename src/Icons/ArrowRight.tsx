import { SVGProps } from "react";
import cn from "./icons.module.scss";

const ArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    className={cn.icon}
    width="17"
    height="24"
    viewBox="0 0 17 24"
    fill="#ADBFDF"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_1_831)">
      <path d="M9.58984 15.825L13.4065 12L9.58984 8.175L10.7648 7L15.7648 12L10.7648 17L9.58984 15.825Z" />
    </g>
    <defs>
      <clipPath id="clip0_1_831">
        <rect width="17" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default ArrowRight;
