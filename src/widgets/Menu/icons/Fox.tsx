import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 511.142 511.142" {...props}>
      <g xmlns="http://www.w3.org/2000/svg"><path d="m220.425 202.108-36.282 50.409v100.024l117.422 158.601h51.569z"/><path d="m184.143 402.959v108.183h80.095z"/><path d="m224.671 137.175 125.806 102.61 125.804-102.61-75.947-85.169-.006.002h-99.703l-.006-.003z"/><path d="m496.578 114.86 9.754-114.86-78.036 38.287z"/><path d="m272.657 38.287-78.037-38.287 9.755 114.861z"/><path d="m350.477 278.498-99.422-81.09 111.853 260.466 125.256-291.677z"/><path d="m154.143 205.204-27.094-13.547-89.467 134.201 84.586 185.284h31.975z"/><path d="m100.008 178.137-95.198-47.599v123.532l18.117 39.687z"/></g>
    </Svg>
  );
};

export default Icon;
