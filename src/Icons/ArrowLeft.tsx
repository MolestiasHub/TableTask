import { SVGProps } from "react";
import cn from "./icons.module.scss";

const ArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    className={cn.icon}
    width="16"
    height="24"
    viewBox="0 0 16 24"
    fill="#ADBFDF"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_1_825)">
      <path d="M6.175 15.825L2.35833 12L6.175 8.175L5 7L0 12L5 17L6.175 15.825Z" />
    </g>
    <defs>
      <clipPath id="clip0_1_825">
        <rect width="16" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default ArrowLeft;
